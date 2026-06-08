import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import contactHandler from './api/contact.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [
      react(),
      {
        name: 'contact-api-dev-server',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (request, response) => {
            const apiResponse = {
              status(statusCode) {
                response.statusCode = statusCode
                return this
              },
              json(data) {
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify(data))
              },
              end() {
                response.end()
              },
            }

            await contactHandler(request, apiResponse)
          })
        },
      },
    ],
  }
})
