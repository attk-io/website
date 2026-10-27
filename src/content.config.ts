import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const strategy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'docs/brand-strategy' }),
});

export const collections = { strategy };
