import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // Will be overridden by GitHub Pages workflow usually or assumes relative
  base: '/', 
});
