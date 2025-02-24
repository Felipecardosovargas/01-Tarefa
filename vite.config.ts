import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/<01-tarefa>/',
  plugins: [react()],
  server: {
    hmr: true, // Habilita o Hot Module Replacement (HMR)
    watch: {
      usePolling: true, 
    },
  },
})
