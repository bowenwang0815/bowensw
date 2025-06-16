const sharp = require('sharp');
const path = require('path');

const inputFile = path.join(__dirname, '../public/Subject.png');
const outputDir = path.join(__dirname, '../public');

// Create smaller versions of the icon
Promise.all([
  // 32x32 favicon
  sharp(inputFile)
    .resize(32, 32)
    .toFile(path.join(outputDir, 'favicon-32.png')),
  
  // 16x16 favicon
  sharp(inputFile)
    .resize(16, 16)
    .toFile(path.join(outputDir, 'favicon-16.png')),
  
  // 180x180 apple touch icon
  sharp(inputFile)
    .resize(180, 180)
    .toFile(path.join(outputDir, 'apple-touch-icon.png'))
]).then(() => {
  console.log('Successfully created resized icons');
}).catch(err => {
  console.error('Error creating resized icons:', err);
}); 