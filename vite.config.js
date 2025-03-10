import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server :{
    port : 3000,
    // proxy:{
    //   '/api' : 'http://localhost:8000',
    //   changeOrigin : true,
    //   rewrite: (path) => path.replace(/^\/api/, '')
    // }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
