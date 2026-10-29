import { Parser } from 'htmlparser2';
import { marked } from 'marked';

export type HeadlinePart = { text: string; accent: boolean };

// The semantic accent marker belongs to the homepage content. Both its wording
// and emphasis survive without importing page layout classes into the image.
export function getShareHeadlineParts(markdown: string): HeadlinePart[] {
  const heading = marked
    .lexer(markdown)
    .find((token) => token.type === 'heading' && token.depth === 1);
  if (!heading || heading.type !== 'heading') {
    throw new Error('The homepage needs an H1 to generate its share image.');
  }
  const parts: HeadlinePart[] = [];
  const accents: boolean[] = [];
  const parser = new Parser({
    onopentag(_name, attributes) {
      accents.push(
        Boolean(accents.at(-1)) ||
          Object.hasOwn(attributes, 'data-headline-accent')
      );
    },
    onclosetag() {
      accents.pop();
    },
    ontext(value) {
      // Normalize formatting whitespace while preserving authored non-breaking spaces.
      const text = value.replace(/[ \t\r\n\f]+/g, ' ');
      const accent = Boolean(accents.at(-1));
      const previous = parts.at(-1);
      if (previous?.accent === accent) previous.text += text;
      else parts.push({ text, accent });
    },
  });
  parser.end(marked.parseInline(heading.text, { async: false }));
  if (parts.length) {
    parts[0].text = parts[0].text.trimStart();
    parts[parts.length - 1].text = parts[parts.length - 1].text.trimEnd();
  }
  if (!parts.some((part) => part.text.trim())) {
    throw new Error('The homepage share headline cannot be empty.');
  }
  return parts.filter((part) => part.text);
}

export function getShareHeadline(markdown: string): string {
  return getShareHeadlineParts(markdown)
    .map((part) => part.text)
    .join('');
}
