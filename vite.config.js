import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 资源baseurl
  // base: 'http://localhost:3000/',
  build: {
    sourcemap: true,
  }
})
