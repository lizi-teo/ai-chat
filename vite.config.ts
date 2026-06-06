import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: 'demo',
  esbuild: {
    jsx: 'automatic',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
})
