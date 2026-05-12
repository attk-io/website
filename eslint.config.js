import eslintPluginAstro from 'eslint-plugin-astro';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';

const tailwindSettings = {
  'better-tailwindcss': {
    entryPoint: 'src/styles/global.css',
  },
};

const tailwindRules = {
  'better-tailwindcss/no-unknown-classes': ['warn', { ignore: ['dot-grid'] }],
  'better-tailwindcss/no-duplicate-classes': 'warn',
  'better-tailwindcss/enforce-consistent-class-order': 'warn',
  'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
  'better-tailwindcss/no-unnecessary-whitespace': 'warn',
  'better-tailwindcss/no-conflicting-classes': 'error',
  'better-tailwindcss/enforce-shorthand-classes': 'warn',
  'better-tailwindcss/enforce-canonical-classes': 'warn',
};

export default [
  { ignores: ['dist/**', '.astro/**', 'node_modules/**'] },
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    plugins: { 'better-tailwindcss': betterTailwindcss },
    settings: tailwindSettings,
    rules: {
      ...tailwindRules,
      'no-restricted-syntax': [
        'error',
        {
          selector: "JSXElement[openingElement.name.name='style']",
          message:
            '<style> tags are not allowed in .astro files. Use Tailwind utility classes (including arbitrary variants like has-[...]:, [&:selector]:) instead.',
        },
      ],
    },
  },
];
