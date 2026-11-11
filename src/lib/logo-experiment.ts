export const LOGO_FONTS = {
  'custom-02': { name: 'Attack-02', round: null },
  'montserrat-400': { name: 'Montserrat · Regular 400', round: 1 },
  'montserrat-600': { name: 'Montserrat · Semibold 600', round: 2 },
  'montserrat-800': { name: 'Montserrat · Extra bold 800', round: 3 },
  'archivo-narrow-400': { name: 'Archivo Narrow · Regular 400', round: 4 },
  'archivo-narrow-550': { name: 'Archivo Narrow · Medium 550', round: 5 },
  'archivo-narrow-700': { name: 'Archivo Narrow · Bold 700', round: 6 },
};
export type LogoSelection = keyof typeof LOGO_FONTS;
export const DEFAULT_LOGO: LogoSelection = 'archivo-narrow-700';
export const LOGO_STORAGE_KEY = 'attk-logo-experiment';
export function resolveLogo(
  saved: unknown,
  query: URLSearchParams
): LogoSelection {
  const candidate = query.get('logo') ?? saved;
  return typeof candidate === 'string' && Object.hasOwn(LOGO_FONTS, candidate)
    ? (candidate as LogoSelection)
    : DEFAULT_LOGO;
}
export function applyLogo(selection: LogoSelection, persist = true) {
  document.documentElement.dataset.logo = selection;
  if (persist) {
    try {
      localStorage.setItem(LOGO_STORAGE_KEY, selection);
    } catch {
      /* Storage is optional. */
    }
  }
  window.dispatchEvent(new Event('attk:logo-changed'));
}
