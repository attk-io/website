# Typography defaults and comparisons

Updated October 28, 2026.

## Defaults

Initial page renders and normal production builds use Alice 400 headlines and Source Sans 3 Regular reading text. Source Sans 3 reading paragraphs and lists use 19px; lead samples, captions, wordmarks, and intentional Spectral quotes retain their own treatments. Alice's mobile hero size fits the grouped phrases on narrow screens.

The shared choices and weights live in [font-experiment.ts](../../src/lib/font-experiment.ts). [Font selection styles](../../src/styles/font-selection.css) apply those choices across the homepage, specimen, and legal pages. Saved and URL choices override the defaults only when the preview controls are enabled.

## Preview options

| Section   | Family                  | Weight choices     |
| --------- | ----------------------- | ------------------ |
| Headlines | Hanken Grotesk          | 400, 500, 600, 700 |
| Headlines | Alice (default)         | 400                |
| Headlines | Amiri                   | 400, 700           |
| Headlines | Bona Nova               | 400, 700           |
| Body      | DM Mono                 | 300, 400, 500      |
| Body      | Open Sans               | 400, 500, 600, 700 |
| Body      | Source Sans 3 (default) | 400, 500, 600, 700 |
| Body      | Lato                    | 400, 700           |

Each selection applies consistently to its section of the type system, including DM Mono across all reading paragraphs and lists. Weight choices use the faces available from the Google font provider; emphasis uses the family's heaviest loaded weight. Families are downloaded at build time and self-hosted, including italic body faces.

## Controls and state

The [font picker](../../src/components/FontPicker.astro) sits below Colors. The outer panels open independently, and Headlines and Body each have an independent disclosure. Font options use button styling with native radio semantics; their borderless weight menus use native selects. Single-weight fonts show text instead of a disabled menu.

Each family remembers its own weight. The selected headline/body families and weights survive refresh, navigation, and same-origin tab changes. Shareable URLs carry `headlines`, `headlineWeight`, `body`, and `bodyWeight`, alongside the color parameters. Retired families fall back to current defaults. Legacy mixed-body and Original-weight settings migrate to explicit font selections.

## Build behavior

Both controls are opt-in through `COLOR_SWITCHER_ENABLED=true`, which local development and PR previews enable. Production has the approved typography and Brick red/Original cream defaults without controls or browser-saved overrides. No website copy changes are part of these experiments.

## Footnotes

Accent candidates and paper comparisons are described in [color experiments](./color-experiments.md).
