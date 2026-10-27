# ATTK Website — Project Context

The marketing website for ATTK Software Inc. (Christian Naths) — a solo technical partner for bootstrapped, non-technical founders who need someone to own the build of their custom software product.

Built with Astro 5 and Tailwind 4. Each design variant is fully independent — no shared design tokens or semantic color system. Variants use standard Tailwind classes directly.

Website copy in `src/content/` is the source of truth. Edit the section files imported by `src/pages/index.astro` for homepage changes. Earlier writing drafts and unused copy are preserved in [the website copy archive](archive/2026-10-26-website-copy/README.md) and are no longer maintained.

Strategic reference documents live in `docs/brand-strategy/`:

- `brand-voice.md` — archetype, voice spectrums, tone variations
- `target-audience.md` — JTBD + Value Proposition Canvas
- `content-outline.md` — page structure and section briefs

The previous "quiet authority" design direction (users, brand personality, aesthetic direction, design principles, accessibility guidelines) has been archived to `archive/2026-04-10-quiet-authority/README.md`. A new design direction will be written here when the next phase starts.

## Local workflow

Work directly in `/Users/christiannaths/Projects/attk/website` by default. Use a separate worktree or cloud environment only when the user requests it.

The user runs the dev server at [http://localhost:4321/](http://localhost:4321/) and keeps a browser tab open to see changes. Use this existing server to check UI changes in the browser, including relevant interactions and desktop/mobile layouts. Start or restart the server only when needed and coordinated with the user.

## Questions and discussion

When working through a series of questions with the user, ask one question at a time and wait for the answer before asking the next. Use each answer to shape the next question. Apply this flow to all multi-question discussions, including discovery, planning, clarification, and skill workflows.

## Agent skills

### Issue tracker

Issues and specs live in GitHub Issues. See [issue tracker](docs/agents/issue-tracker.md).

### Triage labels

Use the five default triage labels. See [triage labels](docs/agents/triage-labels.md).

### Domain docs

Single-context layout. Before exploring, read [domain docs](docs/agents/domain.md).
