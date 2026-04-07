export const designVariants = [
  { id: 'calm', label: 'Calm', slug: 'calm' },
] as const;

export type DesignVariantId = (typeof designVariants)[number]['id'];
