import { defineToolbarApp } from 'astro/toolbar';
import { variants } from '../components/copy-variants/manifest';

const THEMES = ['default', 'ocean'] as const;

const THEME_KEY = 'attk-theme';
const VARIANT_KEY = 'attk-copy-variant';

function getToolbarShadowRoot() {
  const toolbar = document.querySelector('astro-dev-toolbar');
  return toolbar?.shadowRoot ?? null;
}

function hideInspectIfNoIslands() {
  const hasIslands = document.querySelectorAll('astro-island').length > 0;
  if (hasIslands) return;

  const shadow = getToolbarShadowRoot();
  if (!shadow) return;

  const inspectBtn = shadow.querySelector('[data-app-id="astro:xray"]');
  if (inspectBtn) {
    (inspectBtn as HTMLElement).style.display = 'none';
  }
}

function disableAutoHide() {
  const shadow = getToolbarShadowRoot();
  if (!shadow) return;

  const root = shadow.getElementById('dev-toolbar-root');
  if (!root) return;

  root.removeAttribute('data-hidden');

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'data-hidden'
      ) {
        root.removeAttribute('data-hidden');
      }
    }
  });

  observer.observe(root, { attributes: true });
}

export default defineToolbarApp({
  init(canvas) {
    hideInspectIfNoIslands();
    disableAutoHide();
    const window = document.createElement('astro-dev-toolbar-window');

    window.innerHTML = `
      <style>
        h2 {
          margin: 0 0 0.5rem 0;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .section {
          margin-bottom: 1.25rem;
        }
        .section:last-child {
          margin-bottom: 0;
        }
        .options {
          display: flex;
          gap: 0.375rem;
          flex-wrap: wrap;
        }
      </style>

      <div class="section">
        <h2>Theme</h2>
        <div class="options" id="theme-options">
          ${THEMES.map(
            (t) =>
              `<astro-dev-toolbar-button data-theme-option="${t}" size="small">${t}</astro-dev-toolbar-button>`
          ).join('')}
        </div>
      </div>

      <div class="section">
        <h2>Copy Variant</h2>
        <div class="options" id="variant-options">
          ${variants
            .map(
              (v) =>
                `<astro-dev-toolbar-button data-variant-option="${v.id}" size="small">${v.label}</astro-dev-toolbar-button>`
            )
            .join('')}
        </div>
      </div>
    `;

    canvas.appendChild(window);

    // --- Theme switching ---
    const currentTheme = localStorage.getItem(THEME_KEY) || 'default';
    updateThemeButtons(currentTheme);

    canvas.querySelectorAll('[data-theme-option]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const theme = (btn as HTMLElement).dataset.themeOption!;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
        updateThemeButtons(theme);
      });
    });

    function updateThemeButtons(active: string) {
      canvas.querySelectorAll('[data-theme-option]').forEach((btn) => {
        const el = btn as HTMLElement;
        if (el.dataset.themeOption === active) {
          el.setAttribute('button-style', 'purple');
        } else {
          el.setAttribute('button-style', 'gray');
        }
      });
    }

    // --- Copy variant switching ---
    const currentVariant = localStorage.getItem(VARIANT_KEY) || 'v1';
    applyVariant(currentVariant);
    updateVariantButtons(currentVariant);

    canvas.querySelectorAll('[data-variant-option]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const variant = (btn as HTMLElement).dataset.variantOption!;
        applyVariant(variant);
        localStorage.setItem(VARIANT_KEY, variant);
        updateVariantButtons(variant);
      });
    });

    function applyVariant(variant: string) {
      document.querySelectorAll('[data-copy-variant]').forEach((el) => {
        (el as HTMLElement).style.display =
          el.getAttribute('data-copy-variant') === variant ? '' : 'none';
      });

      const style = document.getElementById('copy-variant-style');
      if (style) {
        style.textContent = `[data-copy-variant]:not([data-copy-variant="${variant}"]){display:none!important}`;
      }
    }

    function updateVariantButtons(active: string) {
      canvas.querySelectorAll('[data-variant-option]').forEach((btn) => {
        const el = btn as HTMLElement;
        if (el.dataset.variantOption === active) {
          el.setAttribute('button-style', 'purple');
        } else {
          el.setAttribute('button-style', 'gray');
        }
      });
    }
  },
});
