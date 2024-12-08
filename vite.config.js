import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './', // Ensures relative paths for assets
    build: {
        outDir: 'dist', // Output directory
        emptyOutDir: true // Clean the output directory before each build
    }
})
