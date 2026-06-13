import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ID,
    secretAccessKey: process.env.CLOUDFLARE_KEY,
  },
  requestChecksumCalculation: 'WHEN_REQUIRED',
  responseChecksumValidation: 'WHEN_REQUIRED',
})

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { key, name, medium, note } = req.body
  if (!key) return res.status(400).json({ error: 'Missing key' })

  const meta = { contributor: name || '', medium: medium || '', note: note || '' }

  await r2.send(new PutObjectCommand({
    Bucket: 'honed-uploads',
    Key: `${key}.meta.json`,
    Body: JSON.stringify(meta),
    ContentType: 'application/json',
  }))

  res.status(200).json({ ok: true })
}
