import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const strategy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/strategy' }),
});

export const collections = { strategy };
