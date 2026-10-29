import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import {
  getShareDescription,
  getShareHeadline,
  getShareHeadlineParts,
} from './share-content.ts';

test('reads an updated homepage H1 from its content file', () => {
  const hero = readFileSync(
    new URL('../content/hero.md', import.meta.url),
    'utf8'
  );
  const edited = hero.replace(/^# .*$/m, '# A new homepage headline');
  assert.equal(getShareHeadline(edited), 'A new homepage headline');
});

test('edits to the H1 flow through, including Markdown and HTML entities', () => {
  assert.equal(
    getShareHeadline(
      '# <div>Build **something** <span>useful &amp; lasting</span></div>\n\nBody copy stays out.'
    ),
    'Build something useful & lasting'
  );
});

test('ignores other headings and refuses a missing or empty H1', () => {
  assert.equal(
    getShareHeadline(
      '## Earlier heading\n\n# The actual headline\n\n# Later headline'
    ),
    'The actual headline'
  );
  assert.throws(() => getShareHeadline('## No main heading'), /needs an H1/);
  assert.throws(() => getShareHeadline('# <span></span>'), /cannot be empty/);
});

test('preserves the authored accent through nested markup and wording changes', () => {
  assert.deepEqual(
    getShareHeadlineParts(
      '# I help founders <span data-headline-accent>**build** &amp; launch</span> the right software'
    ),
    [
      { text: 'I help founders ', accent: false },
      { text: 'build & launch', accent: true },
      { text: ' the right software', accent: false },
    ]
  );
});

test('preserves non-breaking spaces from HTML entities and literal text', () => {
  for (const phrase of [
    'build&nbsp;and&nbsp;launch',
    'build\u00a0and\u00a0launch',
  ]) {
    assert.deepEqual(
      getShareHeadlineParts(
        `# I help founders <span data-headline-accent>${phrase}</span> the right software`
      ),
      [
        { text: 'I help founders ', accent: false },
        { text: 'build\u00a0and\u00a0launch', accent: true },
        { text: ' the right software', accent: false },
      ]
    );
  }
});

test('uses the homepage lede for the description, excluding the CTA', () => {
  assert.equal(
    getShareDescription(
      '# A headline\n\nFrom **planning** to <span>launch</span>, it’s yours &amp; ready.\n\n[Book a call](https://example.com)'
    ),
    'From planning to launch, it’s yours & ready.'
  );
  assert.throws(() => getShareDescription('# A headline'), /needs a lede/);
});
