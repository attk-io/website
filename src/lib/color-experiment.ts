// Shared inputs for the specimen and homepage color experiment.
export const READING_INK = '#191613';
export const PALETTES = {
  brick: {
    name: 'Brick red',
    accent: '#B9472D',
    support: '#DFC7A4',
    shade: '#7C3023',
    onAccent: '#FAF0DF',
  },
  earth: {
    name: 'Earthy red-orange',
    accent: '#CE582B',
    support: '#F0BE9A',
    shade: '#903B22',
    onAccent: READING_INK,
  },
  pop: {
    name: 'Bright red-orange',
    accent: '#FF4F24',
    support: '#DFC7A4',
    shade: '#903B22',
    onAccent: READING_INK,
  },
};
export const CREAMS = {
  original: { name: 'Original cream', value: '#F2E2C8' },
  light: { name: 'Lighter cream', value: '#FAF0DF' },
};
export type Hue = 'sand' | 'ink' | 'sun' | 'teal';
export type ColorSelection = {
  palette: keyof typeof PALETTES;
  cream: keyof typeof CREAMS;
};
export const COLOR_STORAGE_KEY = 'attk-color-experiment';
export const DEFAULT_COLOR_STYLE = Object.entries({
  paper: CREAMS.original.value,
  'reading-ink': READING_INK,
  accent: PALETTES.pop.accent,
  support: PALETTES.pop.support,
  shade: PALETTES.pop.shade,
  'on-accent': PALETTES.pop.onAccent,
})
  .map(([name, value]) => `--${name}:${value}`)
  .join(';');

const ramp = (light: string, anchor: string, dark: string) =>
  Array.from({ length: 12 }, (_, index) => {
    const step = index + 1;
    if (step === 1) return light;
    if (step === 9) return anchor;
    if (step === 11) return dark;
    if (step === 12)
      return `color-mix(in srgb, ${dark} 75%, var(--reading-ink))`;
    if (step === 10) return `color-mix(in srgb, ${anchor} 75%, ${dark})`;
    return `color-mix(in srgb, ${anchor} ${Math.round(((step - 1) / 8) * 100)}%, ${light})`;
  });
export const COLOR_RAMPS: Record<Hue, string[]> = {
  sand: ramp(
    'var(--paper)',
    'color-mix(in srgb, var(--reading-ink) 60%, var(--paper))',
    'var(--reading-ink)'
  ),
  ink: ramp('var(--paper)', 'var(--reading-ink)', 'var(--reading-ink)'),
  sun: ramp('var(--paper)', 'var(--accent)', 'var(--shade)'),
  teal: ramp('var(--paper)', 'var(--support)', 'var(--shade)'),
};
// Secondary neutral text needs reading contrast, rather than the ramp's step 11.
COLOR_RAMPS.sand[10] =
  'color-mix(in srgb, var(--reading-ink) 85%, var(--paper))';
COLOR_RAMPS.sand[11] = 'var(--reading-ink)';
COLOR_RAMPS.ink[11] = 'var(--reading-ink)';
export const COLOR_TOKENS = Object.entries(COLOR_RAMPS)
  .flatMap(([hue, colors]) =>
    colors.map((color, index) => `--color-${hue}-${index + 1}: ${color}`)
  )
  .concat(
    ['ocean', 'plum'].flatMap((hue) =>
      Array.from(
        { length: 12 },
        (_, index) =>
          `--color-${hue}-${index + 1}: var(--color-sun-${index + 1})`
      )
    )
  )
  .join(';');

export function applyColorSelection(selection: ColorSelection, persist = true) {
  const palette = PALETTES[selection.palette];
  const cream = CREAMS[selection.cream];
  const root = document.documentElement;
  root.dataset.palette = selection.palette;
  root.dataset.cream = selection.cream;
  for (const [name, value] of Object.entries({
    paper: cream.value,
    accent: palette.accent,
    support: palette.support,
    shade: palette.shade,
    'on-accent': palette.onAccent,
  }))
    root.style.setProperty(`--${name}`, value);
  if (persist) {
    try {
      localStorage.setItem(COLOR_STORAGE_KEY, JSON.stringify(selection));
    } catch {
      /* Keep the in-memory selection when storage is unavailable. */
    }
  }
  window.dispatchEvent(new Event('attk:colors-changed'));
}
