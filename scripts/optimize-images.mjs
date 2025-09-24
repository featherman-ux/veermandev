import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = new URL('..', import.meta.url).pathname;
const publicDir = path.join(root, 'public');
const exts = new Set(['.jpg', '.jpeg', '.png']);

async function processFile(file) {
  const dir = path.dirname(file);
  const base = path.basename(file, path.extname(file));
  const webp = path.join(dir, base + '.webp');
  const avif = path.join(dir, base + '.avif');
  const img = sharp(file).rotate();
  await img.webp({ quality: 70 }).toFile(webp).catch(() => {});
  await img.avif({ quality: 60 }).toFile(avif).catch(() => {});
  console.log('Optimized:', path.relative(publicDir, file));
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(res);
    else if (exts.has(path.extname(res).toLowerCase())) queue.push(processFile(res));
  }
}

const queue = [];
walk(publicDir);
Promise.all(queue).then(() => console.log('Done.')); 

