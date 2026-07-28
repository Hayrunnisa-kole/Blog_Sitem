import test from 'node:test';
import assert from 'node:assert/strict';
import { openExternalLink } from '../src/utils/openExternalLink.js';

test('opens valid http/https links through window.open', () => {
  const calls = [];
  const mockWindow = {
    open: (...args) => {
      calls.push(args);
      return { focus() {} };
    },
  };

  const result = openExternalLink('https://github.com/example/repo', mockWindow);

  assert.equal(result, true);
  assert.deepEqual(calls, [['https://github.com/example/repo', '_blank', 'noopener,noreferrer']]);
});

test('rejects invalid or empty links', () => {
  const calls = [];
  const mockWindow = {
    open: (...args) => {
      calls.push(args);
      return { focus() {} };
    },
  };

  assert.equal(openExternalLink('', mockWindow), false);
  assert.equal(openExternalLink('javascript:alert(1)', mockWindow), false);
  assert.deepEqual(calls, []);
});
