/** @jest-environment jsdom  */

import { injectMeta } from 'inject-meta';

describe('call injectMeta() with both arguments', () => {
  beforeEach(() => injectMeta('hello', 'World!'));

  test('should have <meta> with "content" attribute', () =>
    expect(document.head.querySelector('meta[name="hello"]')?.getAttribute('content')).toBe('World!'));
});
