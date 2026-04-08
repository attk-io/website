# ATTK Website — Project Context

The marketing website for ATTK Software Inc. (Christian Naths) — a solo technical partner for bootstrapped, non-technical founders who need someone to own the build of their custom software product.

Built with Astro 5 and Tailwind 4. Each design variant is fully independent — no shared design tokens or semantic color system. Variants use standard Tailwind classes directly.

Strategic reference documents live in `src/content/strategy/`:

- `brand-voice.md` — archetype, voice spectrums, tone variations
- `target-audience.md` — JTBD + Value Proposition Canvas
- `content-outline.md` — page structure and section briefs

## Design Context

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
