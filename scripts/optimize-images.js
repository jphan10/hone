import sharp from 'sharp'
import { readdir, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const JOBS = [
  {
    input:  'scripts/raw/marketplace',
    output: 'src/assets/marketplace',
    width:  1200,
    label:  'marketplace (portrait)',
  },
  {
    input:  'scripts/raw/atmosphere',
    output: 'src/assets/atmosphere',
    width:  2400,
    label:  'atmosphere (landscape)',
  },
]

const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.tiff', '.tif', '.heic', '.heif', '.webp'])

for (const job of JOBS) {
  if (!existsSync(job.input)) continue

  const files = (await readdir(job.input)).filter(f => SUPPORTED.has(path.extname(f).toLowerCase()))
  if (files.length === 0) { console.log(`${job.label}: no files found in ${job.input}`); continue }

  await mkdir(job.output, { recursive: true })
  console.log(`\n${job.label} — ${files.length} file(s)`)

  for (const file of files) {
    const inPath  = path.join(job.input, file)
    const outName = path.basename(file, path.extname(file)).toLowerCase().replace(/\s+/g, '-') + '.jpg'
    const outPath = path.join(job.output, outName)

    const { width: origWidth } = await sharp(inPath).metadata()
    const resizeWidth = origWidth > job.width ? job.width : undefined

    const info = await sharp(inPath)
      .rotate()
      .resize({ width: resizeWidth, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(outPath)

    const inKB  = Math.round((await import('fs')).statSync(inPath).size / 1024)
    const outKB = Math.round(info.size / 1024)
    console.log(`  ${file} → ${outName}  (${inKB} KB → ${outKB} KB)`)
  }
}

console.log('\nDone. Review outputs then commit src/assets/.')
