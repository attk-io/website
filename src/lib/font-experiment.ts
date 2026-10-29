// Available upright weights verified against google/fonts METADATA.pb, 2026-10-28.
// Hanken is variable (100–900); the picker offers a few useful presets.
export const HEADLINE_FONTS = {
  hanken: {
    name: 'Hanken Grotesk',
    family: 'var(--webfont-hanken-grotesk)',
    weights: [400, 500, 600, 700],
  },
  alice: { name: 'Alice', family: 'var(--webfont-alice)', weights: [400] },
  amiri: { name: 'Amiri', family: 'var(--webfont-amiri)', weights: [400, 700] },
  'bona-nova': {
    name: 'Bona Nova',
    family: 'var(--webfont-bona-nova)',
    weights: [400, 700],
  },
};
// Current families use the same explicit selection rules as alternatives.
// DM Mono provides Light/Regular/Medium; other body families offer heavier cuts.
export const BODY_FONTS = {
  'dm-mono': {
    name: 'DM Mono',
    family: 'var(--webfont-dm-mono)',
    weights: [300, 400, 500],
  },
  'open-sans': {
    name: 'Open Sans',
    family: 'var(--webfont-open-sans)',
    weights: [400, 500, 600, 700],
  },
  'source-sans-3': {
    name: 'Source Sans 3',
    family: 'var(--webfont-source-sans-3)',
    weights: [400, 500, 600, 700],
  },
  lato: {
    name: 'Lato',
    family: 'var(--webfont-lato)',
    // The Google provider currently serves Lato Regular/Bold for these presets.
    weights: [400, 700],
  },
};
export type FontCatalog = Record<
  string,
  { name: string; family: string; weights: number[] }
>;
export type BodyFont = keyof typeof BODY_FONTS;
export type HeadlineFont = keyof typeof HEADLINE_FONTS;
export type FontSelection = {
  headlines: HeadlineFont;
  body: BodyFont;
  bodyWeights: Record<BodyFont, number>;
  weights: Record<HeadlineFont, number>;
};
export const DEFAULT_FONT_CHOICES: Pick<FontSelection, 'headlines' | 'body'> = {
  headlines: 'alice',
  body: 'source-sans-3',
};
export const FONT_STORAGE_KEY = 'attk-font-experiment';
export const WEIGHT_NAMES: Record<number, string> = {
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'Semibold',
  700: 'Bold',
};

// Also used before first paint, serialized into FontExperimentHead. Keep this
// function self-contained: it must not depend on module state or browser APIs.
export function resolveFontSelection(
  fonts: typeof HEADLINE_FONTS,
  saved: unknown,
  query: URLSearchParams,
  bodyFonts: typeof BODY_FONTS,
  defaults: Pick<FontSelection, 'headlines' | 'body'>
): FontSelection {
  const data =
    saved && typeof saved === 'object' ? (saved as Partial<FontSelection>) : {};
  const owns = (key: unknown): key is HeadlineFont =>
    typeof key === 'string' && Object.hasOwn(fonts, key);
  const requestedHeadlines = query.get('headlines');
  const headlines =
    requestedHeadlines !== null && !owns(requestedHeadlines)
      ? defaults.headlines
      : ([requestedHeadlines, data.headlines, defaults.headlines].find(
          owns
        ) as HeadlineFont);
  const weights = Object.fromEntries(
    Object.entries(fonts).map(([id, font]) => {
      const value = data.weights?.[id as HeadlineFont];
      return [
        id,
        typeof value === 'number' && font.weights.includes(value)
          ? value
          : id === 'hanken'
            ? 600
            : 400,
      ];
    })
  ) as FontSelection['weights'];
  const urlWeight = query.get('headlineWeight');
  // A weight URL applies only to its explicitly named, recognized font.
  if (owns(query.get('headlines')) && urlWeight !== null) {
    const weight = Number(urlWeight);
    if (urlWeight === 'original' && headlines === 'hanken')
      weights.hanken = 600;
    else if (
      urlWeight.trim() !== '' &&
      fonts[headlines].weights.includes(weight)
    )
      weights[headlines] = weight;
  }
  const ownsBody = (key: unknown): key is BodyFont =>
    typeof key === 'string' && Object.hasOwn(bodyFonts, key);
  // Legacy 'original' values now mean the actual DM Mono font, not a mixed reset.
  const requestedBody =
    query.get('body') === 'original' ? 'dm-mono' : query.get('body');
  const savedBody = String(data.body) === 'original' ? 'dm-mono' : data.body;
  const body =
    requestedBody !== null && !ownsBody(requestedBody)
      ? defaults.body
      : ([requestedBody, savedBody, defaults.body].find(ownsBody) as BodyFont);
  const bodyWeights = Object.fromEntries(
    Object.entries(bodyFonts).map(([id, font]) => {
      const savedWeights = data.bodyWeights as
        | Record<string, unknown>
        | undefined;
      const value =
        savedWeights?.[id] ??
        (id === 'dm-mono' ? savedWeights?.original : undefined);
      return [
        id,
        typeof value === 'number' && font.weights.includes(value) ? value : 400,
      ];
    })
  ) as FontSelection['bodyWeights'];
  const bodyWeight = query.get('bodyWeight');
  if (
    ownsBody(requestedBody) &&
    bodyWeight !== null &&
    bodyWeight.trim() !== '' &&
    bodyFonts[body].weights.includes(Number(bodyWeight))
  )
    bodyWeights[body] = Number(bodyWeight);
  return { headlines, weights, body, bodyWeights };
}
// These values seed server-rendered pages and the preview resolver alike.
export const DEFAULT_FONT_SELECTION = resolveFontSelection(
  HEADLINE_FONTS,
  {},
  new URLSearchParams(),
  BODY_FONTS,
  DEFAULT_FONT_CHOICES
);
export const DEFAULT_FONT_STYLE = Object.entries({
  '--experiment-headline-weight':
    DEFAULT_FONT_SELECTION.weights[DEFAULT_FONT_SELECTION.headlines],
  '--experiment-body': BODY_FONTS[DEFAULT_FONT_SELECTION.body].family,
  '--experiment-body-weight':
    DEFAULT_FONT_SELECTION.bodyWeights[DEFAULT_FONT_SELECTION.body],
  '--experiment-body-bold-weight': Math.max(
    ...BODY_FONTS[DEFAULT_FONT_SELECTION.body].weights
  ),
})
  .map(([name, value]) => `${name}:${value}`)
  .join(';');
export function getFontSelection(): FontSelection {
  const root = document.documentElement;
  let weights = {},
    bodyWeights = {};
  try {
    weights = JSON.parse(root.dataset.headlineWeights || '{}');
  } catch {}
  try {
    bodyWeights = JSON.parse(root.dataset.bodyWeights || '{}');
  } catch {}
  return resolveFontSelection(
    HEADLINE_FONTS,
    {
      headlines: root.dataset.headlineFont,
      weights,
      body: root.dataset.bodyFont,
      bodyWeights,
    },
    new URLSearchParams(),
    BODY_FONTS,
    DEFAULT_FONT_CHOICES
  );
}
export function applyFontSelection(selection: FontSelection, persist = true) {
  const root = document.documentElement;
  root.dataset.headlineFont = selection.headlines;
  root.dataset.headlineWeights = JSON.stringify(selection.weights);
  const weight = selection.weights[selection.headlines];
  root.dataset.headlineWeight = String(weight);
  root.style.setProperty('--experiment-headline-weight', String(weight));
  root.dataset.bodyFont = selection.body;
  root.dataset.bodyWeights = JSON.stringify(selection.bodyWeights);
  root.style.setProperty(
    '--experiment-body',
    BODY_FONTS[selection.body].family
  );
  root.style.setProperty(
    '--experiment-body-weight',
    String(selection.bodyWeights[selection.body])
  );
  root.style.setProperty(
    '--experiment-body-bold-weight',
    String(Math.max(...BODY_FONTS[selection.body].weights))
  );
  if (persist) {
    try {
      localStorage.setItem(FONT_STORAGE_KEY, JSON.stringify(selection));
    } catch {
      /* Keep controls usable when storage is blocked. */
    }
  }
  window.dispatchEvent(new Event('attk:fonts-changed'));
}
export function shareFontSelection(selection: FontSelection) {
  const url = new URL(location.href);
  url.searchParams.set('headlines', selection.headlines);
  url.searchParams.set(
    'headlineWeight',
    String(selection.weights[selection.headlines])
  );
  url.searchParams.set('body', selection.body);
  url.searchParams.set(
    'bodyWeight',
    String(selection.bodyWeights[selection.body])
  );
  history.replaceState(null, '', url);
}
