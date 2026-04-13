// Baseline Swiss typography scale shared by all section components.
//
// Each section component imports `TYPOGRAPHY_BASELINE`, spreads it into its
// own ClassMap, and overrides individual keys for section-specific needs
// (e.g., HeroSection uses a much larger h1, FAQ uses heavier strong styling
// for bold question lines, Pricing uses h3 as a tier-name treatment).
//
// Values are pure Tailwind utility strings — no semantic class names. The
// scale matches the foundation verified on /specimen: Hanken Grotesk only,
// hierarchy via weight (400/500/600) + size + tracking, ink for links,
// sand for body and background.

import type { ClassMap } from './markdown';

export const TYPOGRAPHY_BASELINE: ClassMap = {
  h1: 'text-[clamp(2.5rem,4vw+1rem,3.75rem)] font-semibold leading-[1.0] tracking-[-0.028em] text-sand-12',
  h2: 'text-[clamp(2rem,3vw+0.75rem,2.875rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-sand-12',
  h3: 'mt-14 text-[1.1875rem] font-semibold leading-[1.4] tracking-[-0.012em] text-plum-11',
  h4: 'mt-8 text-[1.25rem] font-medium leading-[1.3] tracking-[-0.012em] text-sand-12',
  p: 'mt-5 max-w-[68ch] text-[1.0625rem] leading-[1.65] text-sand-12',
  a: 'text-ocean-11 underline decoration-ocean-7 decoration-[1.5px] underline-offset-[3px] hover:decoration-ocean-11 transition-colors duration-150',
  strong: 'font-semibold text-sand-12',
  em: 'italic',
  ul: 'mt-5 max-w-[68ch] space-y-2 list-disc list-outside pl-5',
  ol: 'mt-5 max-w-[68ch] space-y-2 list-decimal list-outside pl-5',
  li: 'text-[1.0625rem] leading-[1.65] text-sand-12 pl-1',
  blockquote: 'mt-6 max-w-[64ch] pl-6 italic text-sand-11',
  hr: 'mt-12 h-px border-0 bg-sand-7',
};

// Quote-style H2 used by every content section (excluding Hero and FinalCTA).
// Alegreya italic reads as a spoken line; a hanging opening curly quote
// (sand-7, rendered via ::before) frames the headline as a pulled quotation.
// Each section composes this with its own max-width for wrap discipline.
export const SECTION_QUOTE_H2 =
  "relative font-spectral italic font-normal text-[clamp(2.25rem,3.25vw+0.75rem,3.25rem)] leading-[1.15] tracking-[-0.005em] text-sand-8 before:content-['“'] before:absolute before:font-spectral before:italic before:font-normal before:text-[1.6em] before:leading-none before:text-sand-7 before:top-[-0.05em] before:-left-5 md:before:-left-10 before:pointer-events-none before:select-none";
