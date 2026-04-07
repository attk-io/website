# ATTK Website — Project Context

The marketing website for ATTK Software Inc. (Christian Naths) — a solo technical partner for bootstrapped, non-technical founders who need someone to own the build of their custom software product.

Built with Astro 5, Tailwind 4, and Radix Colors. Typography is Fira Sans (body) + Source Serif Pro (headings). Themes are defined as CSS custom properties in `src/styles/themes/`.

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

Current themes: `default` (slate + yellow accent), `ocean` (blue + amber accent), and `quiet` (sand + bronze accent). All are light mode only — dark mode counterparts do not yet exist and should be added when dark support is implemented.

## Design Workflow Scope

**All design work happens on `/variants`, never on `/`.**

The current home page (`/`, served by `src/pages/index.astro`) is the live production site and must not be modified. The `/variants` page (`src/pages/variants.astro`) hosts the new markdown-driven content, a copy-variant switcher (4 voice directions), and a theme switcher. This is where all design iteration happens, so the redesign can be deployed without changing what visitors currently see.

**Design directions are isolated in themes.**

Each theme in `src/styles/themes/` is a self-contained set of CSS custom properties wired to the same token contract (`--color-page`, `--color-primary`, `--color-accent`, etc.). The `/variants` toolbar lets you switch between them live. This means multiple design directions can coexist and be A/B compared — create a new theme file, add it to the toolbar's `themes` array in `ReviewToolbar.astro` and the `validThemes` array in `BaseLayout.astro`, and iterate on it independently.

**What this means in practice:**

- Section components in `src/components/sections/` are shared across all themes — style them using token variables, not hardcoded colors
- To explore a new visual direction, create a new theme file rather than modifying an existing one
- The `default` and `ocean` themes are reference points for comparison — leave them as-is
- The `quiet` theme (sand + bronze) is the current active design direction
