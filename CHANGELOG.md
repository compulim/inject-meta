# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- 💢 Moved build tools from Babel to tsup/esbuild
- Bumped dependencies, in PR [#10](https://github.com/compulim/inject-meta-tag/pull/10), and [#13](https://github.com/compulim/inject-meta-tag/pull/13)
   - Development dependencies
      - [`@babel/preset-env@7.24.7`](https://npmjs.com/package/@babel/preset-env/v/7.24.7)
      - [`@babel/preset-react@7.24.7`](https://npmjs.com/package/@babel/preset-react/v/7.24.7)
      - [`@babel/preset-typescript@7.24.7`](https://npmjs.com/package/@babel/preset-typescript/v/7.24.7)
      - [`@tsconfig/recommended@1.0.6`](https://npmjs.com/package/@tsconfig/recommended/v/1.0.6)
      - [`@tsconfig/strictest@2.0.5`](https://npmjs.com/package/@tsconfig/strictest/v/2.0.5)
      - [`@types/node@20.14.9`](https://npmjs.com/package/@types/node/v/20.14.9)
      - [`esbuild@0.21.5`](https://npmjs.com/package/esbuild/v/0.21.5)
      - [`prettier@3.3.2`](https://npmjs.com/package/prettier/v/3.3.2)
      - [`tsup@8.1.0`](https://npmjs.com/package/tsup/v/8.1.0)
      - [`typescript@5.5.2`](https://npmjs.com/package/typescript/v/5.5.2)
- Added [ESLint import/export syntax](https://npmjs.com/package/eslint-plugin-import), in PR [#15](https://github.com/compulim/inject-meta-tag/pull/15)
- Added [`publint`](https://npmjs.com/package/publint), in PR [#15](https://github.com/compulim/inject-meta-tag/pull/15)

## [0.0.1] - 2024-03-31

### Added

- First public release

### Changed

- Updated pull request validation to test against various React versions, in PR [#2](https://github.com/compulim/inject-meta-tag/pull/2)
   - Moved from JSX Runtime to JSX Classic to support testing against React 16

[Unreleased]: https://github.com/compulim/inject-meta/compare/v0.0.1...HEAD
[0.0.1]: https://github.com/compulim/inject-meta/releases/tag/v0.0.1
