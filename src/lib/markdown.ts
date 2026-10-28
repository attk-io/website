// Markdown rendering helper for ATTK website section components.
//
// Section components pass markdown plus a per-tag class map. The helper
// extends marked's Renderer so every generated HTML element carries Tailwind
// utility classes directly on its class attribute — matching the standard
// Tailwind styling pattern shown in the official docs.

import { marked, Renderer, type Tokens } from 'marked';

export type ClassMap = Partial<{
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  p: string;
  a: string;
  strong: string;
  em: string;
  ul: string;
  ol: string;
  li: string;
  blockquote: string;
  hr: string;
}>;

export type MarkdownDocument = {
  body: string;
  label: string | undefined;
  quote: string | undefined;
};

export type RenderedSectionContent = {
  body: string;
  label: string | undefined;
  quote: string | undefined;
};

class TailwindRenderer extends Renderer {
  classes: ClassMap;

  constructor(classes: ClassMap) {
    super();
    this.classes = classes;
  }

  private attr(key: keyof ClassMap): string {
    const value = this.classes[key];
    return value ? ` class="${value}"` : '';
  }

  heading(token: Tokens.Heading): string {
    const text = this.parser.parseInline(token.tokens);
    const tag = `h${token.depth}` as keyof ClassMap;
    return `<h${token.depth}${this.attr(tag)}>${text}</h${token.depth}>`;
  }

  paragraph(token: Tokens.Paragraph): string {
    return `<p${this.attr('p')}>${this.parser.parseInline(token.tokens)}</p>`;
  }

  link(token: Tokens.Link): string {
    const title = token.title ? ` title="${token.title}"` : '';
    return `<a href="${token.href}"${title}${this.attr('a')}>${this.parser.parseInline(token.tokens)}</a>`;
  }

  strong(token: Tokens.Strong): string {
    return `<strong${this.attr('strong')}>${this.parser.parseInline(token.tokens)}</strong>`;
  }

  em(token: Tokens.Em): string {
    return `<em${this.attr('em')}>${this.parser.parseInline(token.tokens)}</em>`;
  }

  list(token: Tokens.List): string {
    const tag = token.ordered ? 'ol' : 'ul';
    const body = token.items.map((item) => this.listitem(item)).join('');
    return `<${tag}${this.attr(tag)}>${body}</${tag}>`;
  }

  listitem(token: Tokens.ListItem): string {
    return `<li${this.attr('li')}>${this.parser.parse(token.tokens)}</li>`;
  }

  blockquote(token: Tokens.Blockquote): string {
    return `<blockquote${this.attr('blockquote')}>${this.parser.parse(token.tokens)}</blockquote>`;
  }

  hr(): string {
    return `<hr${this.attr('hr')} />`;
  }
}

export function renderMarkdown(
  content: string,
  classes: ClassMap = {}
): string {
  const html = marked.parse(content, {
    renderer: new TailwindRenderer(classes),
    async: false,
  }) as string;
  return preventWidows(smartenQuotes(html));
}

export function renderSectionContent(
  content: string,
  classes: ClassMap = {}
): RenderedSectionContent {
  const document = parseMarkdownDocument(content);
  return {
    body: renderMarkdown(document.body, classes),
    label: document.label,
    quote: document.quote,
  };
}

export function parseMarkdownDocument(content: string): MarkdownDocument {
  const normalized = content.replace(/^\uFEFF/, '');
  const match = normalized.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return {
      body: content,
      label: undefined,
      quote: undefined,
    };
  }

  const metadata = parseFrontmatter(match[1]);
  return {
    body: match[2],
    label: metadata.section_label,
    quote: metadata.quote,
  };
}

type Frontmatter = {
  quote: string | undefined;
  section_label: string | undefined;
};

function parseFrontmatter(source: string): Frontmatter {
  const frontmatter: Frontmatter = {
    quote: undefined,
    section_label: undefined,
  };

  for (const line of source.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!match) continue;

    if (match[1] === 'quote') {
      frontmatter.quote = parseFrontmatterValue(match[2]);
    }

    if (match[1] === 'section_label') {
      frontmatter.section_label = parseFrontmatterValue(match[2]);
    }
  }

  return frontmatter;
}

function parseFrontmatterValue(value: string): string | undefined {
  const trimmed = value.trim();
  if (trimmed === '' || trimmed === 'undefined' || trimmed === 'null') {
    return undefined;
  }

  const doubleQuoted = trimmed.match(/^"(.*)"$/);
  if (doubleQuoted) return smartenText(doubleQuoted[1]);

  const singleQuoted = trimmed.match(/^'(.*)'$/);
  if (singleQuoted) return smartenText(singleQuoted[1]);

  return smartenText(trimmed);
}

const BLOCK_TAGS = new Set([
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'li',
  'blockquote',
  'figcaption',
]);

function smartenQuotes(html: string): string {
  return replaceText(html, (text) => {
    return smartenText(text);
  });
}

function smartenText(text: string): string {
  const decoded = text.replace(/&#39;/g, "'").replace(/&quot;/g, '"');
  return decoded
    .replace(/(^|[\s([{—–\-])"/g, '$1\u201C')
    .replace(/"/g, '\u201D')
    .replace(/(^|[\s([{—–\-])'/g, '$1\u2018')
    .replace(/'/g, '\u2019');
}

type WidowSettings = { words: number; offset: number };

// Spans can choose a trailing word group with data-widow-offset (default 0)
// and data-widow-words (default 2). "off", "false", and "1" disable joining.
function preventWidows(html: string): string {
  const tokens = tokenize(html);
  const openStack: { name: string; index: number; settings?: WidowSettings }[] =
    [];
  const handled = new Set<number>();
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind !== 'tag') continue;
    const info = parseTag(token.value);
    if (!info) continue;
    if (!BLOCK_TAGS.has(info.name) && info.name !== 'span') continue;
    if (info.closing) {
      if (openStack.at(-1)?.name !== info.name) continue;
      const scope = openStack.pop()!;
      if (!scope.settings && info.name === 'span') continue;
      joinWidowWords(
        tokens,
        scope.index + 1,
        i,
        scope.settings ?? { words: 2, offset: 0 },
        handled
      );
      // Explicit choices belong to the span, including opt-outs. An enclosing
      // block or span must not rejoin words from that scope.
      if (scope.settings) {
        for (let k = scope.index + 1; k < i; k++) {
          if (tokens[k].kind === 'text') handled.add(k);
        }
      }
    } else if (!info.selfClosing) {
      openStack.push({
        name: info.name,
        index: i,
        settings: readWidowSettings(token.value),
      });
    }
  }
  return tokens.map((t) => t.value).join('');
}

type Token = { kind: 'tag' | 'text'; value: string };

function tokenize(html: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < html.length) {
    if (html[i] === '<') {
      let j = i + 1;
      while (j < html.length) {
        const c = html[j];
        if (c === '"' || c === "'") {
          const end = html.indexOf(c, j + 1);
          j = end === -1 ? html.length : end + 1;
          continue;
        }
        if (c === '>') {
          j++;
          break;
        }
        j++;
      }
      tokens.push({ kind: 'tag', value: html.slice(i, j) });
      i = j;
      continue;
    }
    const next = html.indexOf('<', i);
    const end = next === -1 ? html.length : next;
    tokens.push({ kind: 'text', value: html.slice(i, end) });
    i = end;
  }
  return tokens;
}

function parseTag(
  tag: string
): { name: string; closing: boolean; selfClosing: boolean } | null {
  const match = tag.match(/^<(\/?)([a-zA-Z][a-zA-Z0-9]*)/);
  if (!match) return null;
  return {
    name: match[2].toLowerCase(),
    closing: match[1] === '/',
    selfClosing: tag.endsWith('/>'),
  };
}

function readWidowSettings(tag: string): WidowSettings | undefined {
  const attributes = new Map<string, string>();
  for (const match of tag.matchAll(
    /\s+([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s/>]+)))?/g
  )) {
    attributes.set(
      match[1].toLowerCase(),
      (match[2] ?? match[3] ?? match[4] ?? '').trim().toLowerCase()
    );
  }
  const words = attributes.get('data-widow-words');
  const offset = attributes.get('data-widow-offset');
  if (words === undefined && offset === undefined) return;
  const integer = (
    value: string | undefined,
    fallback: number,
    min: number
  ) => {
    const parsed = Number(value);
    return value !== undefined &&
      /^\d+$/.test(value) &&
      Number.isSafeInteger(parsed) &&
      parsed >= min
      ? parsed
      : fallback;
  };
  return {
    words: words === 'off' || words === 'false' ? 1 : integer(words, 2, 1),
    offset: integer(offset, 0, 0),
  };
}

function joinWidowWords(
  tokens: Token[],
  start: number,
  end: number,
  { words, offset }: WidowSettings,
  handled: Set<number>
): void {
  if (words < 2) return;
  let text = '';
  const parts: { index: number; start: number; end: number }[] = [];
  for (let i = start; i < end; i++) {
    if (tokens[i].kind !== 'text') continue;
    const start = text.length;
    text += tokens[i].value;
    parts.push({ index: i, start, end: text.length });
  }

  // Count visible words across inline tags, including manually joined words.
  const spaces = [...text.matchAll(/(?:\s|&nbsp;|&#160;|&#x0*a0;)+/gi)].filter(
    (match) => match.index > 0 && match.index + match[0].length < text.length
  );
  const wordEnd = spaces.length + 1 - offset;
  const wordStart = Math.max(0, wordEnd - words);
  if (wordEnd - wordStart < 2) return;
  const selectionStart =
    wordStart === 0
      ? 0
      : spaces[wordStart - 1].index + spaces[wordStart - 1][0].length;
  const selectionEnd =
    wordEnd > spaces.length ? text.length : spaces[wordEnd - 1].index;
  if (
    parts.some(
      (part) =>
        handled.has(part.index) &&
        part.end > selectionStart &&
        part.start < selectionEnd
    )
  )
    return;

  const selectedSpaces = spaces.slice(wordStart, wordEnd - 1);
  for (const part of parts) {
    tokens[part.index].value = tokens[part.index].value.replace(
      /(?:\s|&nbsp;|&#160;|&#x0*a0;)+/gi,
      (space, index: number) => {
        const position = part.start + index;
        const selected = selectedSpaces.find(
          (match) =>
            position >= match.index && position < match.index + match[0].length
        );
        return selected ? (position === selected.index ? '\u00A0' : '') : space;
      }
    );
  }
}

function replaceText(html: string, fn: (text: string) => string): string {
  return tokenize(html)
    .map((t) => (t.kind === 'text' ? { ...t, value: fn(t.value) } : t))
    .map((t) => t.value)
    .join('');
}
