import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                // Halaman utama
                main: './index.html',
                // Halaman detail (PENTING: ini agar file ini ikut di-build ke Vercel)
                detail: './detail-project.html',
            },
        },
    },
})