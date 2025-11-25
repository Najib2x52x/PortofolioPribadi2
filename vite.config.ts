import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
        input: {
            // Halaman utama
            main: resolve(__dirname, 'index.html'),
            // Halaman detail (PENTING: ini agar file ini ikut di-build ke Vercel)
            detail: resolve(__dirname, 'detail-project.html'),
        },
        },
    },
})