import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";
//npm install tailwindcss @tailwindcss/vite

import sitemap from '@astrojs/sitemap';
//npm run astro add sitemap



export default defineConfig({
  trailingSlash: 'always',

  build: {
    format: 'directory', // Ensures pages are built as /page/index.html
  },

  site: 'https://example.com',

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
    open: true, 
  },

  integrations: [sitemap()],
});