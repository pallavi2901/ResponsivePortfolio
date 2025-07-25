// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';  // UnoCSS plugin

export default defineConfig({
  plugins: [
    react(),
    UnoCSS(), // Enable UnoCSS
  ],
});
