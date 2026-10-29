import type { APIRoute } from 'astro';
import { experimental_getFontFileURL, fontData } from 'astro:assets';
import type { Font } from 'satori';
import hero from '../../content/hero.md?raw';
import logo from '../../../public/attk-lockup.svg?raw';
import { site } from '../../content/site';
import {
  CREAMS,
  DEFAULT_COLOR_SELECTION,
  PALETTES,
  READING_INK,
} from '../../lib/color-experiment';
import {
  BODY_FONTS,
  DEFAULT_FONT_SELECTION,
  HEADLINE_FONTS,
} from '../../lib/font-experiment';
import { getShareHeadlineParts } from '../../lib/share-content';
import { renderBrandShareImage, renderShareImage } from '../../lib/share-image';

// Astro prerenders this endpoint to a static PNG in dist/. In development the
// same endpoint reads current content each time the preview requests the image.
export const prerender = true;

async function loadFont(
  font: { name: string; family: string },
  weight: Font['weight'],
  requestUrl: URL
): Promise<Font> {
  const variable = font.family.slice(4, -1) as keyof typeof fontData;
  const faces = fontData[variable] ?? [];
  const face = faces.find((face) => {
    const [min, max = min] = (face.weight ?? '400').split(' ').map(Number);
    return (
      face.style === 'normal' && Number(weight) >= min && Number(weight) <= max
    );
  });
  const path = face?.src[0]?.url;
  if (!path)
    throw new Error(`Cannot find ${font.name} ${weight} for the share image.`);
  const response = await fetch(experimental_getFontFileURL(path, requestUrl));
  if (!response.ok)
    throw new Error(`Cannot load share-image font: ${response.status}`);
  return {
    name: font.name,
    weight,
    style: 'normal',
    data: await response.arrayBuffer(),
  };
}

export const GET: APIRoute = async ({ url }) => {
  const selection = DEFAULT_FONT_SELECTION;
  const [headlineFont, bodyFont] = await Promise.all([
    loadFont(
      HEADLINE_FONTS[selection.headlines],
      selection.weights[selection.headlines] as Font['weight'],
      url
    ),
    loadFont(
      BODY_FONTS[selection.body],
      selection.bodyWeights[selection.body] as Font['weight'],
      url
    ),
  ]);
  const palette = PALETTES[DEFAULT_COLOR_SELECTION.palette];
  const themedLogo = logo
    .replaceAll('fill="black"', `fill="${READING_INK}"`)
    .replaceAll('fill="#FDCF18"', `fill="${palette.accent}"`);
  // Retain the headline treatment as a development-only comparison.
  const useHeadline =
    import.meta.env.DEV && url.searchParams.get('layout') === 'headline';
  const render = useHeadline ? renderShareImage : renderBrandShareImage;
  const image = await render({
    headline: getShareHeadlineParts(hero),
    byline: site.shareByline,
    domain: new URL(site.origin).hostname,
    logo: `data:image/svg+xml;base64,${Buffer.from(themedLogo).toString('base64')}`,
    paper: CREAMS[DEFAULT_COLOR_SELECTION.cream].value,
    ink: READING_INK,
    accent: palette.accent,
    headlineFont,
    bodyFont,
  });
  return new Response(new Uint8Array(image), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'no-cache' },
  });
};
