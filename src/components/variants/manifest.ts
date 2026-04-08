export const designVariants = [
  { id: 'template', label: 'Template', slug: 'template' },
] as const;

export type DesignVariantId = (typeof designVariants)[number]['id'];
