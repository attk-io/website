# Color experiment candidates

Working inputs agreed with Christian on October 27, 2026. These are candidates for experiments in the website, not a final palette or permission to roll out a theme.

Roadmap: [Discover a warm, personal visual direction for ATTK](https://github.com/attk-io/website/issues/29).
Decision: [Choose a color palette for Christian’s personal studio](https://github.com/attk-io/website/issues/30).

## Intent

The visual direction should feel like visiting Christian’s personal studio: warm, human, and grounded in the care and accountability of hiring him directly. Preserve the existing website copy during experiments.

Christian supplied an inspiration image with creamy paper, brick red, deeper rust, and charcoal/sepia imagery. The colors below are exploratory approximations, not exact sampled values. The reference’s decorative symbols are not selected design elements.

## Three palette candidates

| Role                                          | Brick red       | Earthy red-orange    | Bright red-orange pop      |
| --------------------------------------------- | --------------- | -------------------- | -------------------------- |
| Original cream                                | `#F2E2C8`       | `#F2E2C8`            | `#F2E2C8`                  |
| Supporting tone                               | `#DFC7A4` sand  | `#F0BE9A` peach tint | `#DFC7A4` sand             |
| Accent                                        | `#B9472D` brick | `#CE582B` red-orange | `#EF572F` vivid red-orange |
| Deeper supporting shade                       | `#7C3023`       | `#903B22`            | `#903B22`                  |
| Original ink, superseded for next experiments | `#302820`       | `#302820`            | `#302820`                  |

Christian preferred the first two palettes from the initial exploration, then requested a third with a brighter red-orange accent. That third option should pull attention out of the smooth, creamy earth tones through a small pop of color. It should not turn the whole page into a bright orange composition.

“Burnt orange” was too restrictive a description: no orange family is locked. These three candidates are the current basis for experimentation.

## Two cream-and-ink pairings to carry forward

| Candidate                  | Background | Ink       |
| -------------------------- | ---------- | --------- |
| Deeper ink, original cream | `#F2E2C8`  | `#191613` |
| Deeper ink, lighter cream  | `#FAF0DF`  | `#191613` |

Christian wanted more visual punch than the original `#302820` ink on `#F2E2C8` cream. He liked both revised pairings and wants to compare them in the context of the website before choosing. Keep both available across the three palette candidates; this yields six useful combinations.

## Next experiment

The `/specimen` page and homepage use one shared theme defined in [color-experiment.ts](../../src/lib/color-experiment.ts). Edit the palette anchors, cream options, ink, or ramps there to change both pages. Both pages include the same [color variant widget](../../src/components/ColorVariantWidget.astro): a vertically centered handle on the right edge opens the Palette and Paper selectors. It starts closed, remains available while scrolling, and closes through its handle or Escape.

Selections are saved in browser storage and restored across refreshes and navigation between the specimen and homepage. Valid URL choices take priority over saved choices, then defaults; copying the specimen URL preserves a comparison for sharing. Open tabs on the same origin also follow selection changes. Storage contains variant identifiers, so code changes to their colors still reach returning visitors. If storage is blocked, URL choices and the current page still work. Deep ink (`#191613`) is fixed across the variants.

The specimen preserves the original foundations page: its full type scale, twelve-step color scales, inline formatting samples, highlight examples, contrast notes, and wordmark weight/tracking comparisons. The new palette and paper controls recolor that system and the homepage through the same theme. The ramps between candidate anchors are exploratory interpolations, not finalized production tokens. Brick Red and Original Cream are the default variants on both pages, including production builds. Other variants remain available through the opt-in widget; valid saved or URL selections override the defaults when switching is enabled. The experiment lives on the `codex/warm-color-specimen` feature branch.

- Apply the candidates to the actual website copy in a throwaway preview, holding typography and layout consistent to isolate color.
- Compare both cream-and-ink pairings for each palette, including desktop and mobile.
- Judge the accent at realistic, restrained coverage. The initial proportion strips were illustrative, not prescribed coverage percentages.
- Evaluate text, links, buttons, and focus states on their actual surfaces before assigning final color roles. Bright accent swatches are not pre-approved text or button pairings.
- Ask Christian to choose or refine the candidates after seeing them in context. Keep the color decision open until then.

The sample headings, wording, and type shown in conversation were comparison aids, not approved copy or typography changes.

## Build behavior

The switcher is opt-in through `COLOR_SWITCHER_ENABLED=true`. Local development explicitly enables it in `.env.development`, and PR CI sets it on its build step. For a local preview build, run `COLOR_SWITCHER_ENABLED=true bun run build`. The normal `build` command leaves it off, and the production deployment explicitly sets the flag to `false`.

Without the flag, both pages retain the shared default theme, but omit the switcher and do not apply browser-saved or URL-selected variants. To change the production colors, edit the shared defaults in [color-experiment.ts](../../src/lib/color-experiment.ts).
