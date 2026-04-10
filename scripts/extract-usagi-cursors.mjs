import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const sourceDir = path.join(process.cwd(), 'public', 'usagi');

const cursorJobs = [
  { input: 'Usagi.ani', output: 'usagi-default.png' },
  { input: 'Usagi Link.ani', output: 'usagi-link.png' },
  { input: 'Usagi Text.ani', output: 'usagi-text.png' },
];

function readAscii(buffer, start, end) {
  return buffer.toString('ascii', start, end);
}

function forEachChunk(buffer, start, end, visitor) {
  let offset = start;

  while (offset + 8 <= end) {
    const id = readAscii(buffer, offset, offset + 4);
    const size = buffer.readUInt32LE(offset + 4);
    const dataStart = offset + 8;
    const dataEnd = dataStart + size;

    if (dataEnd > end) {
      break;
    }

    visitor({ id, size, dataStart, dataEnd });
    offset = dataEnd + (size % 2);
  }
}

function extractFirstIconChunk(aniBuffer) {
  if (readAscii(aniBuffer, 0, 4) !== 'RIFF' || readAscii(aniBuffer, 8, 12) !== 'ACON') {
    throw new Error('Unsupported ANI format.');
  }

  let iconChunk = null;

  forEachChunk(aniBuffer, 12, aniBuffer.length, (chunk) => {
    if (iconChunk || chunk.id !== 'LIST') {
      return;
    }

    const listType = readAscii(aniBuffer, chunk.dataStart, chunk.dataStart + 4);

    if (listType !== 'fram') {
      return;
    }

    forEachChunk(aniBuffer, chunk.dataStart + 4, chunk.dataEnd, (subChunk) => {
      if (!iconChunk && subChunk.id === 'icon') {
        iconChunk = aniBuffer.subarray(subChunk.dataStart, subChunk.dataEnd);
      }
    });
  });

  if (!iconChunk) {
    throw new Error('No icon chunk found in ANI file.');
  }

  return iconChunk;
}

function parseCursorImage(curBuffer) {
  const type = curBuffer.readUInt16LE(2);
  const count = curBuffer.readUInt16LE(4);

  if (type !== 2 || count < 1) {
    throw new Error('Unexpected cursor payload.');
  }

  const widthByte = curBuffer.readUInt8(6);
  const heightByte = curBuffer.readUInt8(7);
  const width = widthByte || 256;
  const height = heightByte || 256;
  const hotspotX = curBuffer.readUInt16LE(10);
  const hotspotY = curBuffer.readUInt16LE(12);
  const imageOffset = curBuffer.readUInt32LE(18);
  const dib = curBuffer.subarray(imageOffset);

  const headerSize = dib.readUInt32LE(0);
  const dibWidth = dib.readInt32LE(4);
  const dibHeight = Math.abs(dib.readInt32LE(8)) / 2;
  const bitCount = dib.readUInt16LE(14);

  if (headerSize < 40 || bitCount !== 32 || dibWidth !== width || dibHeight !== height) {
    throw new Error('Only 32-bit cursor frames are supported.');
  }

  const pixelOffset = headerSize;
  const rowStride = width * 4;
  const rgba = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y += 1) {
    const sourceRow = height - 1 - y;
    const sourceRowStart = pixelOffset + sourceRow * rowStride;
    const targetRowStart = y * rowStride;

    for (let x = 0; x < width; x += 1) {
      const source = sourceRowStart + x * 4;
      const target = targetRowStart + x * 4;

      rgba[target] = dib[source + 2];
      rgba[target + 1] = dib[source + 1];
      rgba[target + 2] = dib[source];
      rgba[target + 3] = dib[source + 3];
    }
  }

  return { width, height, hotspotX, hotspotY, rgba };
}

function makeCrcTable() {
  const table = new Uint32Array(256);

  for (let index = 0; index < 256; index += 1) {
    let value = index;

    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }

    table[index] = value >>> 0;
  }

  return table;
}

const crcTable = makeCrcTable();

function crc32(buffer) {
  let crc = 0xffffffff;

  for (const value of buffer) {
    crc = crcTable[(crc ^ value) & 0xff] ^ (crc >>> 8);
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);

  const typeBuffer = Buffer.from(type, 'ascii');
  const crcValue = crc32(Buffer.concat([typeBuffer, data]));
  const crcBuffer = Buffer.alloc(4);
  crcBuffer.writeUInt32BE(crcValue, 0);

  return Buffer.concat([length, typeBuffer, data, crcBuffer]);
}

function encodePng({ width, height, rgba }) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8);
  ihdr.writeUInt8(6, 9);
  ihdr.writeUInt8(0, 10);
  ihdr.writeUInt8(0, 11);
  ihdr.writeUInt8(0, 12);

  const raw = Buffer.alloc(height * (1 + width * 4));

  for (let y = 0; y < height; y += 1) {
    const rawOffset = y * (1 + width * 4);
    raw[rawOffset] = 0;
    rgba.copy(raw, rawOffset + 1, y * width * 4, (y + 1) * width * 4);
  }

  const compressed = zlib.deflateSync(raw, { level: 9 });

  return Buffer.concat([
    signature,
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', compressed),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

for (const job of cursorJobs) {
  const inputPath = path.join(sourceDir, job.input);
  const outputPath = path.join(sourceDir, job.output);
  const aniBuffer = fs.readFileSync(inputPath);
  const cursorImage = parseCursorImage(extractFirstIconChunk(aniBuffer));
  const pngBuffer = encodePng(cursorImage);

  fs.writeFileSync(outputPath, pngBuffer);

  console.log(
    `${job.output}: ${cursorImage.width}x${cursorImage.height} hotspot(${cursorImage.hotspotX},${cursorImage.hotspotY})`
  );
}
