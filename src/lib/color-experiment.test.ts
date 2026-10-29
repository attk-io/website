import assert from 'node:assert/strict';
import test from 'node:test';
import {
  PALETTES,
  CREAMS,
  READING_INK,
  DEFAULT_COLOR_SELECTION,
  resolveColorSelection,
} from './color-experiment.ts';

const resolve = (saved: unknown, query = '') =>
  resolveColorSelection(
    PALETTES,
    CREAMS,
    saved,
    new URLSearchParams(query),
    DEFAULT_COLOR_SELECTION
  );
const luminance = (hex: string) =>
  hex
    .slice(1)
    .match(/../g)!
    .map((channel) => parseInt(channel, 16) / 255)
    .map((channel) =>
      channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
    )
    .reduce(
      (sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index],
      0
    );
const contrast = (a: string, b: string) => {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
};

test('keeps Brick red and Original cream as the default and preserves valid saved/URL choices', () => {
  assert.deepEqual(resolve(null), { palette: 'brick', cream: 'original' });
  assert.deepEqual(resolve({ palette: 'forest', cream: 'light' }), {
    palette: 'forest',
    cream: 'light',
  });
  assert.deepEqual(
    resolve({ palette: 'forest', cream: 'light' }, 'palette=opal'),
    { palette: 'opal', cream: 'light' }
  );
});
test('retired accents fall back to Brick red while preserving the paper choice', () => {
  for (const palette of ['earth', 'pop']) {
    assert.deepEqual(resolve({ palette, cream: 'light' }), {
      palette: 'brick',
      cream: 'light',
    });
    assert.deepEqual(
      resolve({ palette: 'forest', cream: 'light' }, `palette=${palette}`),
      { palette: 'brick', cream: 'light' }
    );
  }
  assert.deepEqual(
    resolve({}, 'palette=__proto__&cream=constructor'),
    DEFAULT_COLOR_SELECTION
  );
});
test('all candidate/paper combinations resolve and keep readable text at their anchor colors', () => {
  for (const [id, palette] of Object.entries(PALETTES)) {
    assert.ok(
      contrast(palette.onAccent, palette.accent) >= 4.5,
      `${id}: button text`
    );
    assert.ok(
      contrast(READING_INK, palette.support) >= 7,
      `${id}: supporting surface text`
    );
    for (const [cream, paper] of Object.entries(CREAMS)) {
      assert.deepEqual(resolve({}, `palette=${id}&cream=${cream}`), {
        palette: id,
        cream,
      });
      assert.ok(
        contrast(palette.shade, paper.value) >= 4.5,
        `${id}/${cream}: text links`
      );
      assert.ok(
        contrast(READING_INK, paper.value) >= 7,
        `${id}/${cream}: reading text`
      );
    }
  }
});
