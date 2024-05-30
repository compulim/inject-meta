# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Breaking changes

- Moved build tools from Babel to tsup/esbuild

### Changed

- Bumped dependencies, in PR [#10](https://github.com/compulim/inject-meta-tag/pull/10)
   - Development dependencies
      - [`@babel/preset-env@7.24.6`](https://npmjs.com/package/@babel/preset-env/v/7.24.6)
      - [`@babel/preset-react@7.24.6`](https://npmjs.com/package/@babel/preset-react/v/7.24.6)
      - [`@babel/preset-typescript@7.24.6`](https://npmjs.com/package/@babel/preset-typescript/v/7.24.6)
      - [`@tsconfig/recommended@1.0.6`](https://npmjs.com/package/@tsconfig/recommended/v/1.0.6)
      - [`@tsconfig/strictest@2.0.5`](https://npmjs.com/package/@tsconfig/strictest/v/2.0.5)
      - [`@types/node@20.12.13`](https://npmjs.com/package/@types/node/v/20.12.13)
      - [`esbuild@0.21.4`](https://npmjs.com/package/esbuild/v/0.21.4)
      - [`typescript@5.4.5`](https://npmjs.com/package/typescript/v/5.4.5)

## [0.0.1] - 2024-03-31

### Added

- First public release

### Changed

- Updated pull request validation to test against various React versions, in PR [#2](https://github.com/compulim/inject-meta-tag/pull/2)
   - Moved from JSX Runtime to JSX Classic to support testing against React 16

[0.0.1]: https://github.com/compulim/inject-meta-tag/releases/tag/v0.0.1
