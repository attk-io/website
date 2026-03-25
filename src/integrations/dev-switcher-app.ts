import { defineToolbarApp } from 'astro/toolbar';

const THEMES = ['default', 'ocean'] as const;
const COPY_VARIANTS = ['v1', 'v2', 'v3'] as const;

const THEME_KEY = 'attk-theme';
const VARIANT_KEY = 'attk-copy-variant';

export default defineToolbarApp({
  init(canvas) {
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
          ${COPY_VARIANTS.map(
            (v) =>
              `<astro-dev-toolbar-button data-variant-option="${v}" size="small">${v}</astro-dev-toolbar-button>`
          ).join('')}
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
