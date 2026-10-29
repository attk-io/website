import assert from 'node:assert/strict';
import test from 'node:test';
import {
  HEADLINE_FONTS,
  BODY_FONTS,
  DEFAULT_FONT_CHOICES,
  DEFAULT_FONT_SELECTION,
  DEFAULT_FONT_STYLE,
  resolveFontSelection,
} from './font-experiment.ts';

const resolve = (saved: unknown, url = '') =>
  resolveFontSelection(
    HEADLINE_FONTS,
    saved,
    new URLSearchParams(url),
    BODY_FONTS,
    DEFAULT_FONT_CHOICES
  );
test('uses explicit native weights for current fonts and migrates retired choices', () => {
  assert.equal(resolve(null).headlines, 'alice');
  assert.equal(resolve(null).weights.hanken, 600);
  assert.equal(resolve({ headlines: 'amiri' }).weights.amiri, 400);
  assert.equal(resolve({ headlines: 'bitter' }).headlines, 'alice');
});
test('retains independent weights when sharing another family', () => {
  const saved = {
    headlines: 'amiri',
    weights: { amiri: 700, 'bona-nova': 400, hanken: 500 },
  };
  const selection = resolve(saved, 'headlines=bona-nova&headlineWeight=700');
  assert.equal(selection.headlines, 'bona-nova');
  assert.equal(selection.weights.amiri, 700);
  assert.equal(selection.weights['bona-nova'], 700);
  assert.equal(selection.weights.hanken, 500);
  assert.equal(resolve(selection, 'headlines=amiri').weights.amiri, 700);
});
test('rejects unsupported weights and retired URL families', () => {
  const selection = resolve(
    {
      headlines: 'amiri',
      weights: { alice: 700, amiri: 300, 'bona-nova': '700' },
    },
    'headlines=alice&headlineWeight=700'
  );
  assert.equal(selection.weights.alice, 400);
  assert.equal(selection.weights.amiri, 400);
  assert.equal(selection.weights['bona-nova'], 400);
  assert.equal(
    resolve({ headlines: 'amiri' }, 'headlines=bitter&headlineWeight=700')
      .weights.amiri,
    400
  );
  assert.equal(
    resolve({}, 'headlines=__proto__&headlineWeight=700').headlines,
    'alice'
  );
});
test('all supported choices round trip, including Hanken', () => {
  for (const [id, font] of Object.entries(HEADLINE_FONTS)) {
    for (const weight of font.weights) {
      const selection = resolve({}, `headlines=${id}&headlineWeight=${weight}`);
      assert.equal(selection.headlines, id);
      assert.equal(
        selection.weights[id as keyof typeof HEADLINE_FONTS],
        weight
      );
      assert.deepEqual(
        resolve(JSON.parse(JSON.stringify(selection))),
        selection
      );
    }
  }
  assert.equal(
    resolve(
      { weights: { hanken: 700 } },
      'headlines=hanken&headlineWeight=original'
    ).weights.hanken,
    600
  );
});

test('old headline-only settings preserve their weights and default body typography', () => {
  const selection = resolve({ headlines: 'amiri', weights: { amiri: 700 } });
  assert.equal(selection.weights.amiri, 700);
  assert.equal(selection.body, 'source-sans-3');
  assert.equal(selection.bodyWeights['source-sans-3'], 400);
});
test('body and headlines have independent URL choices and per-family weight memories', () => {
  const saved = {
    headlines: 'amiri',
    weights: { amiri: 700 },
    body: 'open-sans',
    bodyWeights: { 'open-sans': 500, 'source-sans-3': 600 },
  };
  const selection = resolve(saved, 'body=lato&bodyWeight=700');
  assert.equal(selection.headlines, 'amiri');
  assert.equal(selection.weights.amiri, 700);
  assert.equal(selection.body, 'lato');
  assert.equal(selection.bodyWeights.lato, 700);
  assert.equal(selection.bodyWeights['open-sans'], 500);
  assert.equal(
    resolve(selection, 'body=source-sans-3').bodyWeights['source-sans-3'],
    600
  );
  assert.equal(
    resolve(selection, 'body=original&bodyWeight=700').bodyWeights['dm-mono'],
    400
  );
  assert.deepEqual(resolve(JSON.parse(JSON.stringify(selection))), selection);
});
test('all body weights round trip and unsupported values fall back safely', () => {
  for (const [font, config] of Object.entries(BODY_FONTS)) {
    for (const weight of config.weights) {
      const selection = resolve({}, `body=${font}&bodyWeight=${weight}`);
      assert.equal(selection.body, font);
      assert.equal(
        selection.bodyWeights[font as keyof typeof BODY_FONTS],
        weight
      );
    }
  }
  assert.equal(
    resolve({}, 'body=__proto__&bodyWeight=700').body,
    'source-sans-3'
  );
  assert.equal(resolve({}, 'body=lato&bodyWeight=350').bodyWeights.lato, 400);
  assert.equal(
    resolve({ body: 'open-sans', bodyWeights: { 'open-sans': '700' } })
      .bodyWeights['open-sans'],
    400
  );
});

test('removed fonts fall back to defaults and discard retired weight entries', () => {
  for (const font of ['arbutus-slab', 'caladea']) {
    const saved = resolve({
      headlines: font,
      weights: { [font]: 700, amiri: 700 },
    });
    assert.equal(saved.headlines, 'alice');
    assert.ok(!Object.hasOwn(saved.weights, font));
    assert.equal(saved.weights.amiri, 700);
    assert.equal(
      resolve({ headlines: 'amiri' }, `headlines=${font}&headlineWeight=700`)
        .headlines,
      'alice'
    );
  }
  const saved = resolve({
    body: 'fira-sans',
    bodyWeights: { 'fira-sans': 600, 'open-sans': 500 },
  });
  assert.equal(saved.body, 'source-sans-3');
  assert.equal(saved.bodyWeights['open-sans'], 500);
  assert.ok(!Object.hasOwn(saved.bodyWeights, 'fira-sans'));
  assert.equal(
    resolve({ body: 'open-sans' }, 'body=fira-sans&bodyWeight=600').body,
    'source-sans-3'
  );
});

test('legacy mixed-default selections migrate to explicit DM Mono and Hanken weights', () => {
  const selection = resolve(
    {
      body: 'original',
      bodyWeights: { original: null },
      headlines: 'hanken',
      weights: { hanken: null },
    },
    'body=original&bodyWeight=original&headlines=hanken&headlineWeight=original'
  );
  assert.equal(selection.body, 'dm-mono');
  assert.equal(selection.bodyWeights['dm-mono'], 400);
  assert.equal(selection.weights.hanken, 600);
  assert.deepEqual(BODY_FONTS['dm-mono'].weights, [300, 400, 500]);
});

test('new launches use Alice 400 and Source Sans 3 Regular unless a saved or URL choice overrides them', () => {
  const selection = resolve(null);
  assert.deepEqual(selection, DEFAULT_FONT_SELECTION);
  assert.match(DEFAULT_FONT_STYLE, /--experiment-headline-weight:400/);
  assert.match(
    DEFAULT_FONT_STYLE,
    /--experiment-body:var\(--webfont-source-sans-3\)/
  );
  assert.equal(selection.headlines, 'alice');
  assert.equal(selection.weights.alice, 400);
  assert.equal(selection.body, 'source-sans-3');
  assert.equal(selection.bodyWeights['source-sans-3'], 400);
  assert.equal(
    resolve({ headlines: 'amiri', body: 'lato' }).headlines,
    'amiri'
  );
  assert.equal(resolve({ headlines: 'amiri', body: 'lato' }).body, 'lato');
});
