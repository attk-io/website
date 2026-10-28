import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { renderMarkdown, renderSectionContent } from './markdown.ts';

const nbsp = '\u00a0';

function span(attributes: string, content: string): string {
  return `<span ${attributes}>${content}</span>`;
}

for (const [offset, words, expected] of [
  [0, 2, `build the right${nbsp}software`],
  [0, 3, `build the${nbsp}right${nbsp}software`],
  [1, 2, `build the${nbsp}right software`],
  [1, 3, `build${nbsp}the${nbsp}right software`],
] as const) {
  test(`joins ${words} words with offset ${offset}`, () => {
    const attributes = `data-widow-offset="${offset}" data-widow-words="${words}"`;
    assert.equal(
      renderMarkdown(span(attributes, 'build the right software')),
      `<p>${span(attributes, expected)}</p>`
    );
  });
}

test('defaults to two words and zero offset', () => {
  assert.equal(
    renderMarkdown('build the right software'),
    `<p>build the right${nbsp}software</p>`
  );
  assert.equal(
    renderMarkdown(span('data-widow-offset=1', 'the right software')),
    `<p>${span('data-widow-offset=1', `the${nbsp}right software`)}</p>`
  );
  assert.equal(
    renderMarkdown(span("data-widow-words='3'", 'the right software')),
    `<p>${span("data-widow-words='3'", `the${nbsp}right${nbsp}software`)}</p>`
  );
});

for (const words of ['off', 'false', '1']) {
  test(`${words} disables joining and ignores the offset`, () => {
    const content = span(
      `data-widow-words="${words}" data-widow-offset="1"`,
      'the right software'
    );
    assert.equal(
      renderMarkdown(`# Intro ${content}`),
      `<h1>Intro ${content}</h1>`
    );
  });
}

test('counts words across nested inline markup', () => {
  const attributes = 'data-widow-offset="1"';
  assert.equal(
    renderMarkdown(span(attributes, 'the <strong>right</strong> software')),
    `<p>${span(attributes, `the${nbsp}<strong>right</strong> software`)}</p>`
  );
});

test('keeps explicit scopes independent from surrounding text', () => {
  const controlled = span('data-widow-offset="1"', `the right software`);
  const rendered = span('data-widow-offset="1"', `the${nbsp}right software`);
  assert.equal(
    renderMarkdown(`${controlled} is ready to build`),
    `<p>${rendered} is ready to${nbsp}build</p>`
  );
  const off = span('data-widow-words="off"', 'right');
  assert.equal(
    renderMarkdown(`the ${off} software`),
    `<p>the ${off} software</p>`
  );
});

test('an inner explicit scope takes precedence over an outer one', () => {
  const content = span(
    'data-widow-words="3"',
    `the ${span('data-widow-words="off"', 'right software')}`
  );
  assert.equal(renderMarkdown(content), `<p>${content}</p>`);
});

test('preserves manual non-breaking spaces and HTML attributes', () => {
  const attributes =
    'data-widow-offset="1" title="Keep data-widow-words=off as text"';
  assert.equal(
    renderMarkdown(span(attributes, 'the&nbsp;right software')),
    `<p>${span(attributes, `the${nbsp}right software`)}</p>`
  );
  const manual = span('data-widow-words="off"', 'the&nbsp;right software');
  assert.equal(renderMarkdown(manual), `<p>${manual}</p>`);
});

test('invalid values use defaults and short phrases stay bounded', () => {
  for (const value of ['-1', '0', '2.5', 'nope', 'Infinity']) {
    const attributes = `data-widow-words="${value}" data-widow-offset="${value}"`;
    assert.equal(
      renderMarkdown(span(attributes, 'the right software')),
      `<p>${span(attributes, `the right${nbsp}software`)}</p>`
    );
  }
  const short = span('data-widow-words="100"', 'right software');
  assert.equal(
    renderMarkdown(short),
    `<p>${span('data-widow-words="100"', `right${nbsp}software`)}</p>`
  );
  const pastEnd = span('data-widow-offset="100"', 'right software');
  assert.equal(renderMarkdown(pastEnd), `<p>${pastEnd}</p>`);
});

test('keeps whitespace outside the selected word group', () => {
  const attributes = 'data-widow-words="3"';
  assert.equal(
    renderMarkdown(span(attributes, '  the  right\tsoftware  ')),
    `<p>${span(attributes, `  the${nbsp}right${nbsp}software  `)}</p>`
  );
});
