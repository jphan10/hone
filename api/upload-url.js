import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ID,
    secretAccessKey: process.env.CLOUDFLARE_KEY,
  },
})

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { filename, contentType, name, medium, note } = req.body

  const key = `${Date.now()}-${filename.replace(/[^a-zA-Z0-9._-]/g, '_')}`

  const command = new PutObjectCommand({
    Bucket: 'honed-uploads',
    Key: key,
    ContentType: contentType,
    Metadata: {
      contributor: name || '',
      medium: medium || '',
      note: note || '',
    },
  })

  const url = await getSignedUrl(r2, command, { expiresIn: 600 })

  res.status(200).json({ url, key })
}
