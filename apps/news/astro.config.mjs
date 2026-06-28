import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://news.driftlang.dev',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
