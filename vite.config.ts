import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/01-tarefa/', // Deve ser igual ao nome do repositório no GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
})
