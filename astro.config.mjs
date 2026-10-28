import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Fonts are downloaded from Google at build time and served from our own
// domain, so visitors' browsers never contact Google Fonts. Each cssVariable
// is mapped to a Tailwind font token in src/styles/global.css.
const sans = [
  'ui-sans-serif',
  'system-ui',
  '-apple-system',
  'Segoe UI',
  'sans-serif',
];

export default defineConfig({
  output: 'static',
  outDir: './dist',
  build: {
    format: 'directory',
  },
  trailingSlash: 'ignore',
  fonts: [
    ...['Open Sans', 'Source Sans 3', 'Lato'].map((name) => ({
      provider: fontProviders.google(),
      name,
      cssVariable: `--webfont-${name.toLowerCase().replaceAll(' ', '-')}`,
      weights: name === 'Lato' ? [400, 700] : [400, 500, 600, 700],
      styles: ['normal', 'italic'],
      fallbacks: sans,
    })),
    ...['Alice', 'Amiri', 'Bona Nova'].map((name) => ({
      provider: fontProviders.google(),
      name,
      cssVariable: `--webfont-${name.toLowerCase().replaceAll(' ', '-')}`,
      weights: ['Amiri', 'Bona Nova'].includes(name) ? [400, 700] : [400],
      styles: ['normal'],
      fallbacks: ['Georgia', 'serif'],
    })),
    {
      provider: fontProviders.google(),
      name: 'Hanken Grotesk',
      cssVariable: '--webfont-hanken-grotesk',
      weights: ['100 900'],
      styles: ['normal', 'italic'],
      fallbacks: sans,
    },
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--webfont-space-grotesk',
      weights: ['400 700'],
      styles: ['normal'],
      fallbacks: sans,
    },
    {
      provider: fontProviders.google(),
      name: 'DM Mono',
      cssVariable: '--webfont-dm-mono',
      weights: [300, 400, 500],
      styles: ['normal', 'italic'],
      fallbacks: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    {
      provider: fontProviders.google(),
      name: 'Spectral',
      cssVariable: '--webfont-spectral',
      weights: [400, 500],
      styles: ['italic'],
      fallbacks: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
