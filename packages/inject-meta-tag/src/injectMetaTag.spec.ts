/** @jest-environment jsdom */

import injectMeta from './injectMeta';

afterEach(() => {
  document.documentElement.innerHTML = '';
});

describe('injectMeta() without content', () => {
  beforeEach(() => injectMeta('hello'));

  test('should append <meta> tag', () => expect(document.head.querySelector('meta[name="hello"]')).toBeTruthy());
});

describe('injectMeta() with content', () => {
  beforeEach(() => injectMeta('hello', 'World!'));

  test('should append <meta> tag', () => expect(document.head.querySelector('meta[name="hello"]')).toBeTruthy());

  test('should have "content" attribute', () =>
    expect(document.head.querySelector('meta[name="hello"]')?.getAttribute('content')).toBe('World!'));
});
