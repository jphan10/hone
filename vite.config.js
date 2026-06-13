import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function serveUploadPage() {
  return {
    name: 'serve-upload-page',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/upload' || req.url === '/upload/') {
          const file = path.resolve(__dirname, 'public/upload/index.html')
          res.setHeader('Content-Type', 'text/html')
          res.end(fs.readFileSync(file))
          return
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), serveUploadPage()],
})
