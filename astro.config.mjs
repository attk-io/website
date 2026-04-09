import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  outDir: './dist',
  build: {
    format: 'directory',
  },
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
