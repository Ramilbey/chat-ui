import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://mock-test.worthycodes.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})