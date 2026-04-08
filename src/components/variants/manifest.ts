export const designVariants = [
  { id: 'template', label: 'Template', slug: 'template' },
  {
    id: 'builders-notebook',
    label: "Builder's Notebook",
    slug: 'builders-notebook',
  },
  { id: 'quiet-authority', label: 'Quiet Authority', slug: 'quiet-authority' },
] as const;

export type DesignVariantId = (typeof designVariants)[number]['id'];
