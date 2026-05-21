// Baseline Swiss typography scale shared by all section components.
//
// Each section component imports `TYPOGRAPHY_BASELINE`, spreads it into its
// own ClassMap, and overrides individual keys for section-specific needs
// (e.g., the hero uses a much larger h1, FAQ uses heavier strong styling for
// bold question lines, Pricing uses h3 as a tier-name treatment).
//
// Values are pure Tailwind utility strings — no semantic class names. The
// scale matches the foundation verified on /specimen: Hanken Grotesk only,
// hierarchy via weight (400/500/600) + size + tracking, ink for links,
// sand for body and background.

import type { ClassMap } from './markdown';

// Shared body paragraph classes (excluding top margin). Sections compose this
// with their own `mt-*` so every section body reads the same without each one
// re-declaring the measure, size, leading, and color.
export const SECTION_BODY_P =
  'max-w-[68ch] text-[1.0625rem] leading-[1.65] text-sand-12';

// Pull quote treatment used by top-level marketing sections.
export const SECTION_QUOTE =
  "relative font-spectral italic font-normal text-[clamp(2.25rem,3.25vw+0.75rem,3.25rem)] leading-[1.15] tracking-[-0.005em] text-sand-8 before:content-['“'] before:absolute before:font-spectral before:italic before:font-normal before:text-[1.6em] before:leading-none before:text-sand-7 before:top-[-0.05em] before:-left-5 md:before:-left-10 before:pointer-events-none before:select-none";

export const TYPOGRAPHY_BASELINE: ClassMap = {
  h1: 'text-[clamp(2.5rem,4vw+1rem,3.75rem)] font-semibold leading-[1.0] tracking-[-0.028em] text-sand-12',
  h2: 'text-[clamp(2rem,3vw+0.75rem,2.875rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-sand-12',
  h3: 'isolate mt-14 text-[1.1875rem] font-semibold leading-[1.4] tracking-[-0.012em] text-ink-12',
  h4: 'mt-8 text-[1.25rem] font-medium leading-[1.3] tracking-[-0.012em] text-sand-12',
  p: `mt-5 ${SECTION_BODY_P}`,
  a: 'text-ocean-11 underline decoration-ocean-7 decoration-[1.5px] underline-offset-[3px] hover:decoration-ocean-11 transition-colors duration-150',
  strong: 'font-semibold text-sand-12',
  em: 'italic',
  ul: 'mt-5 max-w-[68ch] space-y-2 list-disc list-outside pl-5',
  ol: 'mt-5 max-w-[68ch] space-y-2 list-decimal list-outside pl-5',
  li: 'text-[1.0625rem] leading-[1.65] text-sand-12 pl-1',
  blockquote: `${SECTION_QUOTE} max-w-[26ch]`,
  hr: 'mt-12 h-px border-0 bg-sand-7',
};
