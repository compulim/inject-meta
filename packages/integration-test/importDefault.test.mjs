/** @jest-environment jsdom  */

import { injectMetaTag } from 'inject-meta-tag';

describe('call injectMetaTag() with both arguments', () => {
  beforeEach(() => injectMetaTag('hello', 'World!'));

  test('should have <meta> with "content" attribute', () =>
    expect(document.head.querySelector('meta[name="hello"]')?.getAttribute('content')).toBe('World!'));
});
