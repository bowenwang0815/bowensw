const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// You can change this path to your image
const inputImage = 'src/app/favicon.svg'; // Change this to your image path

// Generate favicon.ico
sharp(inputImage)
  .resize(32, 32)
  .toFile(path.join(publicDir, 'favicon.ico'))
  .then(() => console.log('Generated favicon.ico'))
  .catch(err => console.error('Error generating favicon.ico:', err));

// Generate apple-icon.png
sharp(inputImage)
  .resize(180, 180)
  .toFile(path.join(publicDir, 'apple-icon.png'))
  .then(() => console.log('Generated apple-icon.png'))
  .catch(err => console.error('Error generating apple-icon.png:', err)); 