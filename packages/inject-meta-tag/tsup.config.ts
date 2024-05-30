import { defineConfig } from 'tsup';

export default defineConfig([
  {
    dts: true,
    entry: {
      'inject-meta-tag': './src/index.ts'
    },
    format: ['cjs', 'esm'],
    sourcemap: true
  }
]);
