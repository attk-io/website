# ATTK Website — Project Context

The marketing website for ATTK Software Inc. (Christian Naths) — a solo technical partner for bootstrapped, non-technical founders who need someone to own the build of their custom software product.

Built with Astro 5, Tailwind 4, and Radix Colors. Typography is Fira Sans (body) + Source Serif Pro (headings). Baseline design tokens are defined in `src/styles/themes/tokens.css`; each design variant overrides them via its own CSS file in `src/styles/variants/`.

Strategic reference documents live in `src/content/strategy/`:

- `brand-voice.md` — archetype, voice spectrums, tone variations
- `target-audience.md` — JTBD + Value Proposition Canvas
- `content-outline.md` — page structure and section briefs

## Design Context

### Users

Bootstrapped solo founders — typically non-technical — who have identified a market gap that requires custom software. They arrive via warm referral, not search. They have skin in the game (quit a job, invested personal capital) and a clear product vision, but no way to evaluate technical quality themselves. Choosing a builder feels like a leap of faith, and they're burning time every day without a product in market. When they land on this site, they are anxious, motivated, and already half-convinced by whoever referred them. They need to finish reading and feel: "this is clearly the real thing, and I want to talk to this person."

### Brand Personality

Three words: **Calm. Honest. Capable.**

Archetype is Sage + Caregiver — the trusted expert who genuinely cares about the founder's outcome. Voice is conversational, calm/understated in energy, warm and personal. Authority through restraint, not volume. Confident without being arrogant; warm without being sycophantic; calm without being passive. After reading, the ideal prospect should feel **excitement** ("this person could actually make my vision real") and **trust** ("this feels honest and real — no games, no upsell").

### Aesthetic Direction

**Quietly modern and utilitarian.** Clean sans-serif, minimal ornament, generous but disciplined whitespace. A timeless, trustworthy feel — closer to a well-made essay or an opinionated studio site (Basecamp, 37signals, Pitch) than to a SaaS landing page. The design should feel like infrastructure: purposeful, well-built, nothing decorative for its own sake. Light + dark mode, respecting system preference.

**Anti-references — explicitly avoid:**

- Generic SaaS aesthetics: gradient hero blobs, abstract isometric illustrations, floating 3D shapes, animated mesh backgrounds
- Stock photos of diverse teams in glass offices
- Trust-logo bars, fake testimonial carousels, press-mention strips
- Buzzwords rendered as display type ("disrupt," "10x," "crushing it")
- Startup-bro visual language — neon gradients, glassmorphism as decoration, chunky pill CTAs shouting from the fold
- Agency-speak polish that reads as impersonal or templated

### Design Principles

1. **Restraint is the statement.** Authority comes from what's left out. When in doubt, remove — fewer sections, fewer words, fewer flourishes. The silence around an element is part of its weight.
2. **Utilitarian before decorative.** Every element earns its place by doing a job. Ornament is only allowed when it clarifies hierarchy or communicates tone. If it's purely aesthetic, cut it.
3. **Human, not corporate.** This is one person, not a company. The design should feel signed — specific typographic choices, considered details, a point of view — not templated. Avoid anything that could appear on a thousand other sites.
4. **Clarity is the design.** The founder is anxious and non-technical. Typography, hierarchy, and spacing should make every sentence easier to read than the last. If a layout choice makes the content harder to parse, it's wrong no matter how it looks.
5. **Accessible by default (WCAG 2.1 AA).** 4.5:1 minimum contrast on body text, visible keyboard focus, semantic HTML, `prefers-reduced-motion` respected. Accessibility is a baseline constraint, not a finishing pass.

## Existing Design Tokens

Defined in `src/styles/themes/tokens.css` and used via Tailwind's `@theme` in `src/styles/global.css`:

- `--color-page` / `--color-surface` — backgrounds
- `--color-primary` / `--color-muted` / `--color-faint` — text hierarchy
- `--color-accent` / `--color-on-accent` — single accent color
- `--color-separator` / `--color-outline` — borders and rules
- `--font-sans` (Fira Sans) / `--font-serif` (Source Serif Pro)

Each design variant has its own CSS file in `src/styles/variants/` that overrides these tokens, and its own section components in `src/components/variants/[name]/sections/`. All variants are light mode only — dark mode counterparts do not yet exist and should be added when dark support is implemented.

## Design Workflow Scope

**All design work happens on `/variants/[name]/`, never on `/`.**

The current home page (`/`, served by `src/pages/index.astro`) is the live production site and must not be modified. Design variants live at `/variants/[name]/` — each is a fully independent page with its own section components, CSS, and layout. The `/variants/` index redirects to the first variant. A review toolbar provides navigation between design variants and copy variant switching (4 voice directions).

**Design directions are isolated as URL-based variants.**

Each variant has its own directory under `src/components/variants/[name]/` containing independent section components and copy-variant wiring files. Each variant also has its own CSS file in `src/styles/variants/` that overrides the baseline design tokens from `src/styles/themes/tokens.css`. The variant registry lives in `src/components/variants/manifest.ts`.

**To add a new design direction:**

1. Create a new directory: `src/components/variants/[name]/sections/` with section components (seed from an existing variant or from `src/components/sections/`)
2. Create copy-variant wiring files: `src/components/variants/[name]/copy-variants/v1.astro` through `v4.astro` (import sections from `../sections/` and markdown from `src/content/variants/`)
3. Create a CSS file: `src/styles/variants/[name].css` with `:root` token overrides
4. Create a page: `src/pages/variants/[name].astro` (import `VariantLayout`, `CopyVariantSection`, the variant's copy-variant files, and `Footer`; add `<style is:global>@import '../../styles/variants/[name].css';</style>`)
5. Add an entry to `src/components/variants/manifest.ts`

**What this means in practice:**

- Each design variant is fully independent — layout, structure, typography, and visual treatment can all diverge
- Section components under `src/components/variants/[name]/sections/` are owned by that variant and can be freely modified without affecting other variants
- Shared section components in `src/components/sections/` serve as templates for seeding new variants
