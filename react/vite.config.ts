import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { federation } from '@module-federation/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: 'http://localhost:5173',
    port: 5173,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 @ 指向 src 目录
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'reactApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Homepage': './src/components/home/export-home.tsx',
      },
      manifest: true,
      shared: ['react', 'react-dom/client'],
    }),
  ],
  base: 'http://localhost:5173',
})
