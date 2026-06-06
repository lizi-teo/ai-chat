import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'index.ts'),
        primitives: path.resolve(__dirname, 'components/primitives/index.ts'),
        'components/ui/button': path.resolve(__dirname, 'components/ui/button.tsx'),
        'lib/utils': path.resolve(__dirname, 'lib/utils.ts'),
        'lib/theme-config': path.resolve(__dirname, 'lib/theme-config.ts'),
      },
      formats: ['es'],
    },
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: false,
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        /^framer-motion/,
        /^lucide-react/,
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        /^@base-ui\/react/,
        /^@anthropic-ai/,
        /^next/,
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: '.',
        entryFileNames: '[name].js',
      },
    },
  },
  esbuild: {
    jsx: 'automatic',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
})
