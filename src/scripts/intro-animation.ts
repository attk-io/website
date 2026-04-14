// First-visit intro animation: starts with the page scaled down and anchored
// on the FinalCTA yellow box, then zooms in and simultaneously fades the rest
// of the page in while scrolling to the top.
//
// The companion pre-paint guard lives inline in `BaseLayout.astro` and sets
// `window.__attkIntroPending` plus the initial CSS (scale, visibility:hidden,
// opacity:0 on fade targets) before the body parses. This module picks up
// that flag and drives the sequence.

export {};

declare global {
  interface Window {
    __attkIntroPending?: boolean;
    __attkIntroSheet?: HTMLStyleElement;
  }
}

const STORAGE_KEY = 'attkSeenIntro';
const HOLD_MS = 4000;
const ZOOM_MS = 2000;
const FADE_SCROLL_MS = 2500;
const MIN_START_SCALE = 0.02;
const MAX_START_SCALE = 0.25;
const FALLBACK_START_SCALE = 0.05;

const easeInOut = (t: number): number =>
  t < 0.5 ? 16 * t ** 5 : 1 - Math.pow(-2 * t + 2, 5) / 2;

const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const animate = (ms: number, step: (progress: number) => void): Promise<void> =>
  new Promise((resolve) => {
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / ms, 1);
      step(p);
      if (p < 1) requestAnimationFrame(tick);
      else resolve();
    };
    requestAnimationFrame(tick);
  });

const measureAnchor = (anchor: HTMLElement): { x: number; y: number } => {
  let x = 0;
  let y = 0;
  for (
    let el: HTMLElement | null = anchor;
    el;
    el = el.offsetParent as HTMLElement | null
  ) {
    x += el.offsetLeft;
    y += el.offsetTop;
  }
  return { x, y: y + anchor.offsetHeight / 2 };
};

const computeStartScale = (stage: HTMLElement, originX: number): number => {
  const svg = stage.querySelector<SVGSVGElement>(
    'section:has([data-intro-anchor]) svg'
  );
  if (!svg) return FALLBACK_START_SCALE;
  const prev = stage.style.transform;
  stage.style.transform = 'none';
  const rect = svg.getBoundingClientRect();
  stage.style.transform = prev;
  const svgLeft = rect.left + window.scrollX;
  const svgRight = rect.right + window.scrollX;
  const vw = window.innerWidth;
  const leftCap = svgLeft < originX ? originX / (originX - svgLeft) : Infinity;
  const rightCap =
    svgRight > originX ? (vw - originX) / (svgRight - originX) : Infinity;
  const fit = Math.min(leftCap, rightCap) * 0.8;
  return Math.max(MIN_START_SCALE, Math.min(MAX_START_SCALE, fit));
};

const runIntro = async (
  stage: HTMLElement,
  anchor: HTMLElement,
  fades: NodeListOf<HTMLElement>
): Promise<void> => {
  let offsetY = 0;
  let startScale = FALLBACK_START_SCALE;

  const applyAnchor = () => {
    const { x, y } = measureAnchor(anchor);
    stage.style.transformOrigin = `${x}px ${y}px`;
    offsetY = Math.max(0, y - window.innerHeight / 2);
    startScale = computeStartScale(stage, x);
  };

  const setTransform = (scale: number, ty: number) => {
    stage.style.transform = `translate3d(0, ${-ty}px, 0) scale(${scale})`;
  };

  if (document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch {}
  }

  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
  applyAnchor();
  setTransform(startScale, offsetY);
  stage.style.visibility = 'visible';

  await wait(HOLD_MS);

  await animate(ZOOM_MS, (p) => {
    const s = startScale + (1 - startScale) * easeInOut(p);
    setTransform(s, offsetY);
  });

  await animate(FADE_SCROLL_MS, (p) => {
    const e = easeInOut(p);
    setTransform(1, offsetY * (1 - e));
    fades.forEach((el) => {
      el.style.opacity = String(e);
    });
  });

  stage.style.transform = '';
  stage.style.transformOrigin = '';
  stage.style.willChange = '';
  stage.style.visibility = '';
  fades.forEach((el) => {
    el.style.opacity = '';
    el.style.willChange = '';
  });
  window.__attkIntroSheet?.remove();
  document.documentElement.classList.remove('attk-intro-active');
  try {
    localStorage.setItem(STORAGE_KEY, '1');
  } catch {}
};

const bootIntro = (): void => {
  if (!window.__attkIntroPending) return;
  const stage = document.getElementById('attk-stage');
  const anchor = document.querySelector<HTMLElement>('[data-intro-anchor]');
  const fades = document.querySelectorAll<HTMLElement>('[data-intro-fade]');
  if (!stage || !anchor) return;
  runIntro(stage, anchor, fades);
};

// Typing the secret word resets the "seen" flag and reloads, letting users
// (and the designer) replay the intro on demand.
const bootSecret = (): void => {
  const secret = 'attk';
  let buf = '';
  window.addEventListener('keydown', (e) => {
    if (e.key.length !== 1) return;
    buf = (buf + e.key.toLowerCase()).slice(-secret.length);
    if (buf === secret) {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
      location.reload();
    }
  });
};

bootIntro();
bootSecret();
