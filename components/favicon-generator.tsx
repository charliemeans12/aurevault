// This is just a reference component to show how to generate favicons
// You would run this code separately to generate the favicon files

/*
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateFavicons() {
  const logoPath = path.join(process.cwd(), 'public/assets/aurevault-logo.png');
  
  // Create favicon.ico (multi-size ico file)
  await sharp(logoPath)
    .resize(16, 16)
    .toFile(path.join(process.cwd(), 'public/favicon-16x16.png'));
  
  await sharp(logoPath)
    .resize(32, 32)
    .toFile(path.join(process.cwd(), 'public/favicon-32x32.png'));
  
  await sharp(logoPath)
    .resize(180, 180)
    .toFile(path.join(process.cwd(), 'public/apple-touch-icon.png'));
  
  await sharp(logoPath)
    .resize(192, 192)
    .toFile(path.join(process.cwd(), 'public/android-chrome-192x192.png'));
  
  await sharp(logoPath)
    .resize(512, 512)
    .toFile(path.join(process.cwd(), 'public/android-chrome-512x512.png'));
}

generateFavicons().catch(console.error);
*/
