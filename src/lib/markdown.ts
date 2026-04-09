// Markdown rendering helper for ATTK website section components.
//
// Each section component imports `renderMarkdown(content, classMap)` and
// passes a per-tag class map. The helper extends marked's Renderer so that
// every generated HTML element carries Tailwind utility classes directly on
// its class attribute — matching the standard Tailwind styling pattern shown
// in the official docs.

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
  return marked.parse(content, {
    renderer: new TailwindRenderer(classes),
    async: false,
  }) as string;
}
