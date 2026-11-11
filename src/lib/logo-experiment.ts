export const LOGO_FONTS = {
  lobster: { name: 'Lobster', round: 2 },
  oxanium: { name: 'Oxanium', round: 3 },
  fraunces: { name: 'Fraunces', round: 5 },
  alfa: { name: 'Alfa Slab One', round: 6 },
  bebas: { name: 'Bebas Neue', round: 9 },
  'custom-01': { name: 'Custom Oxanium · attack-01', round: null },
  'custom-02': { name: 'Custom Oxanium · attack-02', round: null },
};
export type LogoSelection = keyof typeof LOGO_FONTS;
export const DEFAULT_LOGO: LogoSelection = 'custom-02';
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
