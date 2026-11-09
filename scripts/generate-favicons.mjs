import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const publicDirectory = new URL('../public/', import.meta.url);
const source = await readFile(new URL('favicon.svg', publicDirectory));

// Raster fallbacks use the SVG's light palette and retain transparency.
// Keep existing URLs stable for crawlers and saved bookmarks.
for (const [filename, size] of [
  ['favicon.png', 16],
  ['favicon32.png', 32],
  ['favicon32512w.png', 512],
]) {
  await sharp(source, { density: 1152 })
    .resize(size, size)
    .png()
    .toFile(fileURLToPath(new URL(filename, publicDirectory)));
}
