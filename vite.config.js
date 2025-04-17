import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',  // Allow access from any device on the network
    port: 5180,        // Or choose a different port if needed
    strictPort: true,  // Prevents Vite from switching ports automatically
  },
})


