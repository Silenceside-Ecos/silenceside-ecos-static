import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Allows setting a base path for GitHub Pages project sites.
// In Actions we set BASE_PATH=/<repo-name>/ for project pages, or "/" for user/org pages or custom domains.
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base,
  server: { open: true }
})
