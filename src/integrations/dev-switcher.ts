import type { AstroIntegration } from 'astro';
import { ArrowUpDown } from 'lucide-static';

export default function devSwitcher(): AstroIntegration {
  return {
    name: 'dev-switcher',
    hooks: {
      'astro:config:setup': ({ addDevToolbarApp }) => {
        addDevToolbarApp({
          id: 'dev-switcher',
          name: 'Content Variants',
          icon: ArrowUpDown,
          entrypoint: new URL('./dev-switcher-app.ts', import.meta.url)
            .pathname,
        });
      },
    },
  };
}
