import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    server: {
        proxy: {
            '^/ext/.*': {
                target: 'http://127.0.0.1:5501/remote-extensions',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/ext/, '')
            }
        }
    },
    plugins: [vue()]
})
