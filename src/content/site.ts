import hero from './hero.md?raw';
import { getShareDescription, getShareHeadline } from '../lib/share-content';

// Page metadata reads the same headline and lede displayed on the homepage.
export const site = {
  name: 'ATTK Software',
  origin: 'https://attk.io',
  title: getShareHeadline(hero).replace(/\s+/g, ' '),
  description: getShareDescription(hero),
  shareByline: 'Your technical partner',
};
