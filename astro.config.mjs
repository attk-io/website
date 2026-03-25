import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import devSwitcher from './src/integrations/dev-switcher';

export default defineConfig({
  output: 'static',
  outDir: './dist',
  build: {
    format: 'file',
  },
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [devSwitcher()],
});
