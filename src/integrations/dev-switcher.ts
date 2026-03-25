import type { AstroIntegration } from 'astro';

export default function devSwitcher(): AstroIntegration {
  return {
    name: 'dev-switcher',
    hooks: {
      'astro:config:setup': ({ addDevToolbarApp }) => {
        addDevToolbarApp({
          id: 'dev-switcher',
          name: 'Switcher',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"/></svg>`,
          entrypoint: new URL('./dev-switcher-app.ts', import.meta.url)
            .pathname,
        });
      },
    },
  };
}
