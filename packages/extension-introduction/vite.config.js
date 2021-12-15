import { defineConfig } from 'vite'
import path from "path";

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'extension-introduction',
            formats: ["es"],
            fileName: (format) => `extension-introduction.${format}m.js`
        },
        rollupOptions: {
            external: ['@tiptap/core']
        }
    }
})
