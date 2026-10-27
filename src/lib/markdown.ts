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

function preventWidows(html: string): string {
  const tokens = tokenize(html);
  const openStack: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind !== 'tag') continue;
    const info = parseTag(token.value);
    if (!info) continue;
    if (BLOCK_TAGS.has(info.name)) {
      if (info.closing) {
        const openIndex = openStack.pop();
        if (openIndex === undefined) continue;
        const lastText = findLastText(tokens, openIndex + 1, i);
        if (lastText === -1) continue;
        tokens[lastText] = {
          kind: 'text',
          value: tokens[lastText].value.replace(/(\s)(\S+\s*)$/, '\u00A0$2'),
        };
      } else if (!info.selfClosing) {
        openStack.push(i);
      }
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

function findLastText(tokens: Token[], start: number, end: number): number {
  for (let k = end - 1; k >= start; k--) {
    if (tokens[k].kind === 'text' && /\S/.test(tokens[k].value)) return k;
  }
  return -1;
}

function replaceText(html: string, fn: (text: string) => string): string {
  return tokenize(html)
    .map((t) => (t.kind === 'text' ? { ...t, value: fn(t.value) } : t))
    .map((t) => t.value)
    .join('');
}
