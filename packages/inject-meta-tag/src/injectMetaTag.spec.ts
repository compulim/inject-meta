/** @jest-environment jsdom */

import injectMetaTag from './injectMetaTag';

afterEach(() => {
  document.documentElement.innerHTML = '';
});

describe('injectMeta() without content', () => {
  beforeEach(() => injectMetaTag('hello'));

  test('should append <meta> tag', () => expect(document.head.querySelector('meta[name="hello"]')).toBeTruthy());
});

describe('injectMeta() with content', () => {
  beforeEach(() => injectMetaTag('hello', 'World!'));

  test('should append <meta> tag', () => expect(document.head.querySelector('meta[name="hello"]')).toBeTruthy());

  test('should have "content" attribute', () =>
    expect(document.head.querySelector('meta[name="hello"]')?.getAttribute('content')).toBe('World!'));
});
