const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, 'src/assets/images');

async function optimizeImages() {
  try {
    const files = fs.readdirSync(imagesDir);
    
    for (const file of files) {
      if (!file.match(/\.(png|jpe?g)$/i)) continue;
      
      const filePath = path.join(imagesDir, file);
      const stat = fs.statSync(filePath);
      const sizeMB = stat.size / (1024 * 1024);
      
      if (sizeMB > 0.5) {
        console.log(`Optimizing ${file} (${sizeMB.toFixed(2)} MB)...`);
        const tempPath = path.join(imagesDir, 'temp_' + file);
        
        await sharp(filePath)
          .resize({ width: 1920, withoutEnlargement: true })
          .jpeg({ quality: 80, progressive: true, force: false })
          .png({ quality: 80, force: false })
          .toFile(tempPath);
          
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        const newStat = fs.statSync(filePath);
        console.log(`? Optimized ${file}: ${(newStat.size / (1024 * 1024)).toFixed(2)} MB`);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

optimizeImages();
