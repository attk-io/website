# Quiet Authority — design archive (2026-04-10)

**Commit:** `6ac064f025ec226f1fb0d6604f68e7a546951ffb`

This is a frozen record of the ATTK marketing site's "quiet authority" design direction, captured just before the tree was reset to a blank canvas for the next phase of exploration. The design was a single-page, understated marketing site pairing EB Garamond (display serif) with DM Sans (body) and DM Mono (accents), on a warm cream background with a single burnt-orange copper accent. The palette was hand-picked (not generated), the typography used fluid `clamp()` sizing, and the layout followed editorial pacing — narrow columns, generous whitespace, asymmetry over rigid grids.

Full-page desktop screenshot (1440px viewport): [`./home-desktop.png`](./home-desktop.png)

## Colors

Values sourced from `src/styles/colors/sand.css` and `src/styles/colors/copper.css` at the archived commit.

### Sand (neutrals, warm cream)

| Token     | Hex       | Role                                              |
| --------- | --------- | ------------------------------------------------- |
| `sand-1`  | `#faf7f2` | Body background, button bg, button text on copper |
| `sand-3`  | `#f4ede4` | About section bg, FinalCTA paragraph              |
| `sand-5`  | `#ebe4da` | FAQ paragraph divider                             |
| `sand-6`  | `#ddd5cb` | Pricing h3 top border                             |
| `sand-7`  | `#c9bfb2` | Section borders, decorative phase numbers         |
| `sand-10` | `#5a5148` | Muted text (hero subtitle)                        |
| `sand-11` | `#3d3530` | Body text                                         |
| `sand-12` | `#2c2622` | Headings, default body color                      |

### Copper (accent, burnt orange)

| Token       | Hex       | Role                                                        |
| ----------- | --------- | ----------------------------------------------------------- |
| `copper-7`  | `#e8c4b8` | Footer text + nav links                                     |
| `copper-8`  | `#c9684d` | Footer top border                                           |
| `copper-9`  | `#b84c2a` | Primary accent: CTAs, links, h3 accents, decorative borders |
| `copper-10` | `#a34122` | Accent hover                                                |

Only the steps actually in use were defined — this was a deliberate constraint to keep the palette minimal.

## Typography

Three families, wired through Tailwind `@theme` tokens in `src/styles/global.css` and loaded from Google Fonts in `src/layouts/BaseLayout.astro`:

| Family      | Role                                         | Tailwind token   |
| ----------- | -------------------------------------------- | ---------------- |
| EB Garamond | Display serif (h1, h2)                       | `--font-display` |
| DM Sans     | Body sans-serif                              | `--font-sans`    |
| DM Mono     | Monospace accents (nav, labels, accent copy) | `--font-mono`    |

### Per-element sizing

| Element                                              | Family      | Size                             | Weight | Line-height | Tracking | Where                         |
| ---------------------------------------------------- | ----------- | -------------------------------- | ------ | ----------- | -------- | ----------------------------- |
| Body base                                            | DM Sans     | `1rem` (text-lg)                 | 400    | 1.7         | normal   | `BaseLayout.astro` body       |
| Hero h1                                              | EB Garamond | `clamp(2.5rem, 6vw, 4.5rem)`     | 500    | 1.05        | -0.03em  | `HeroSection.astro`           |
| Hero subtitle                                        | DM Mono     | `clamp(0.95rem, 1.6vw, 1.1rem)`  | 400    | 1.75        | normal   | `HeroSection.astro`           |
| Hero CTA link                                        | DM Mono     | `text-base`                      | 500    | default     | normal   | `HeroSection.astro`           |
| Section h2 (About / WhoThisIsFor / HowItWorks / FAQ) | EB Garamond | `clamp(1.5rem, 3vw, 2rem)`       | 500    | 1.1         | normal   | respective section components |
| Pricing h2                                           | EB Garamond | `clamp(1.15rem, 2.5vw, 1.35rem)` | 500    | 1.375       | normal   | `PricingSection.astro`        |
| Pricing h3                                           | DM Mono     | `1.05rem`                        | 500    | 1.375       | normal   | `PricingSection.astro`        |
| FAQ strong                                           | DM Mono     | `0.95rem`                        | 500    | default     | normal   | `FAQSection.astro`            |
| FinalCTA h2                                          | EB Garamond | `clamp(1.5rem, 3vw, 2.25rem)`    | 500    | default     | normal   | `FinalCTASection.astro`       |
| FinalCTA p                                           | DM Mono     | `0.95rem`                        | 400    | default     | normal   | `FinalCTASection.astro`       |
| HowItWorks phase numbers                             | EB Garamond | `text-4xl`                       | 300    | none        | tight    | `HowItWorksSection.astro`     |
| Header nav                                           | DM Mono     | `text-sm`                        | 600    | default     | `0.08em` | `HeaderSection.astro`         |
| Footer p                                             | DM Sans     | `text-sm`                        | 400    | default     | normal   | `Footer.astro`                |

## Notes on the approach

- **Light mode only.** Warm cream background (`#faf7f2`), never pure white.
- **Fluid typography** via `clamp()` — no discrete breakpoints for headline sizing.
- **Single accent color** used with discipline. No gradients, no multi-color palettes.
- **Generous vertical spacing**, narrow content columns, editorial pacing.
- **Home page component render order:** `HeaderSection` → `HeroSection` → `WhoThisIsForSection` → `HowItWorksSection` → `AboutSection` → `PricingSection` → `FAQSection` → `FinalCTASection` → `Footer`.
- **Content source:** each section was driven by a markdown file in `src/content/` (e.g. `hero.md`, `who-this-is-for.md`), rendered through `src/lib/markdown.ts` with per-element Tailwind class maps.

## Design direction (archived from CLAUDE.md)

The following Design Context section previously lived in `CLAUDE.md` and guided every implementation decision in this direction. It has been moved here so `CLAUDE.md` can be rewritten fresh for the next phase without losing the record of what informed "quiet authority".

### Users

Bootstrapped, non-technical solo founders who've been referred by a trusted contact. They have a clear product vision, skin in the game, and need a technical partner — not a vendor. They're at a high-stakes inflection point: the software is the business, and choosing the wrong builder could burn months and tens of thousands of dollars. They value quality, speed, and trust over price.

### Brand Personality

**Sage + Caregiver archetype.** Three words: confident, honest, caring. The voice is conversational and calm — like talking to a smart friend who happens to be an expert. Warm but not sycophantic. Direct but not blunt. Authority comes through restraint and track record, not assertion. Target emotions: excitement ("this person could make my vision real") and trust ("this feels honest and real").

### Aesthetic Direction

**Authored confidence — warm, direct, and spacious.** The site should feel like it was made by a specific person with a clear point of view. The communication is plain, simple, and direct. Authority comes from restraint, generous whitespace, and letting strong copy do the work — not from visual complexity.

- **Theme:** Light mode only — warm cream/off-white backgrounds, paper-like warmth. Not stark white.
- **Typography:** Serif headings for authority and character, clean sans-serif for body text. Large headline sizes that communicate confidence. Strong hierarchy through scale and weight.
- **Color:** Monochromatic base with a single bold accent color. Tint neutrals toward the brand hue. No multi-color palettes, no gradients. Restraint is the principle.
- **Layout:** Narrow content columns with wide margins. Generous vertical spacing between sections — nothing cramped. Editorial pacing, not dashboard density. Content-first, not chrome-first.
- **Illustration:** Subtle touches only — highlighted phrases, simple line accents, small decorative marks. No stock photography, no complex illustrations. The words and spacing do the primary work.
- **References:** upsideams.com (warm B2B, teal accent, numbered sections), searchingforbirds.visualcinnamon.com (editorial pacing, cream backgrounds, narrow columns), rh.design (bold typography, monochromatic, generous whitespace), swapsmore.com (warm palette, subtle hand-drawn touches), basecamp.com (opinionated copy, hand-highlighted labels), once.com/campfire (bold single-color, long-form sales letter, conversational copy).
- **Anti-references:** Generic SaaS marketing sites, glassmorphism, dark-mode-with-glowing-accents, stock photography, mega-menus, complex UI chrome, startup-bro visual language.

### Design Principles

1. **Say it plain** — No fluff, no filler, no jargon. Every element earns its place. If the copy is strong enough, the design can be simple.
2. **One accent, full commitment** — Pick one bold color and use it with discipline. The constraint creates cohesion. Everything else is warm neutrals.
3. **Space is confidence** — Generous whitespace signals "we're not desperate for your attention." Let sections breathe. Tight groupings for related content, wide separations between ideas.
4. **Authored, not templated** — The site should feel like one person made it with intention. Asymmetry over rigid grids. Editorial pacing over dashboard layouts. Personality through typography and copy, not decoration.
5. **Readable above all** — WCAG AA contrast ratios required. Typography choices must prioritize legibility. Accessibility is not optional.

### Accessibility

- WCAG AA minimum for all contrast ratios
- Keyboard navigation support
- Screen reader compatibility
- Semantic HTML structure
