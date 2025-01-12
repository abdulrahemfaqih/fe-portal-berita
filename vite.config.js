import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "https://portal-berita-24c0bb377e97.herokuapp.com/",
				changeOrigin: true,
				headers: {
					Accept: "application/json",
					"Content-type": "application/json"
				}
			}
		}
	}
})
