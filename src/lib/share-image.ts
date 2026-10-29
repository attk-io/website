import satori, { type Font, type SatoriNode } from 'satori';
import sharp from 'sharp';
import type { HeadlinePart } from './share-content';

export const SHARE_IMAGE_WIDTH = 1200;
export const SHARE_IMAGE_HEIGHT = 630;

type ShareImage = {
  headline: HeadlinePart[];
  byline: string;
  domain: string;
  logo: string;
  paper: string;
  ink: string;
  accent: string;
  headlineFont: Font;
  bodyFont: Font;
};

// Satori embeds font outlines; Sharp exports the PNG without a browser or any
// machine-installed fonts. Fit the headline to its box instead of fixing lines.
export async function renderShareImage(image: ShareImage): Promise<Uint8Array> {
  const text = (
    children: string,
    style: Record<string, string | number> = {}
  ) => ({
    type: 'div',
    props: { style: { display: 'flex', ...style }, children },
  });

  for (let fontSize = 78; fontSize >= 40; fontSize -= 2) {
    let headlineFits = false;
    const svg = await satori(
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            flexDirection: 'column',
            width: SHARE_IMAGE_WIDTH,
            height: SHARE_IMAGE_HEIGHT,
            backgroundColor: image.paper,
            color: image.ink,
            borderLeft: `12px solid ${image.accent}`,
            fontFamily: image.bodyFont.name,
            fontWeight: image.bodyFont.weight,
          },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  position: 'absolute',
                  left: 76,
                  top: 58,
                  width: 1048,
                  height: 50,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
                children: [
                  {
                    type: 'img',
                    props: { src: image.logo, width: 150, height: 50 },
                  },
                ],
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  position: 'absolute',
                  left: 76,
                  top: 170,
                  width: 1048,
                },
                children: {
                  type: 'div',
                  props: {
                    'data-share-headline': true,
                    style: {
                      width: 1048,
                      fontFamily: image.headlineFont.name,
                      fontWeight: image.headlineFont.weight,
                      fontSize,
                      lineHeight: 1.15,
                      display: 'block',
                      color: image.ink,
                    },
                    children: image.headline.map((part) => ({
                      type: 'span',
                      props: {
                        style: {
                          color: part.accent ? image.accent : image.ink,
                        },
                        children: part.text,
                      },
                    })),
                  },
                },
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  position: 'absolute',
                  left: 76,
                  top: 493,
                  width: 1048,
                  justifyContent: 'space-between',
                  borderTop: `1px solid ${image.ink}38`,
                  paddingTop: 30,
                  fontSize: 25,
                },
                children: [
                  text(image.byline),
                  text(image.domain, { color: image.accent }),
                ],
              },
            },
          ],
        },
      },
      {
        width: SHARE_IMAGE_WIDTH,
        height: SHARE_IMAGE_HEIGHT,
        fonts: [image.headlineFont, image.bodyFont],
        onNodeDetected(node: SatoriNode) {
          if (node.props['data-share-headline']) {
            headlineFits = node.height <= 310 && node.width <= 1048;
          }
        },
      }
    );
    if (headlineFits) {
      return new Uint8Array(await sharp(Buffer.from(svg)).png().toBuffer());
    }
  }
  throw new Error(
    'The homepage headline is too long for the share image. Review the image layout.'
  );
}

// Keep the recognizable mark inside the central 630×630 area, so a square
// center crop retains the complete identity instead of fragments of a headline.
export async function renderBrandShareImage(
  image: ShareImage
): Promise<Uint8Array> {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          width: SHARE_IMAGE_WIDTH,
          height: SHARE_IMAGE_HEIGHT,
          backgroundColor: image.paper,
          color: image.ink,
          fontFamily: image.headlineFont.name,
          fontWeight: image.headlineFont.weight,
        },
        children: [
          {
            type: 'img',
            props: {
              src: image.logo,
              width: 510,
              height: 170,
              style: { position: 'absolute', left: 345, top: 185 },
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                position: 'absolute',
                top: 403,
                width: SHARE_IMAGE_WIDTH,
                justifyContent: 'center',
                fontSize: 36,
                color: image.accent,
              },
              children: image.byline,
            },
          },
        ],
      },
    },
    {
      width: SHARE_IMAGE_WIDTH,
      height: SHARE_IMAGE_HEIGHT,
      fonts: [image.headlineFont],
    }
  );
  return new Uint8Array(await sharp(Buffer.from(svg)).png().toBuffer());
}
