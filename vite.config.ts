import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
const pathResolve = (dir: string) => resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      pages: pathResolve('./src/pages'),
      components: pathResolve('./src/components'),
      assets: pathResolve('./src/assets')
    }
  },
  plugins: [react()]
})
