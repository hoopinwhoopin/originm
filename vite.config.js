import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.dcm'], 
    build: {
    chunkSizeWarningLimit: 1600,
  },
})
