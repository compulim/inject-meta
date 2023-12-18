# `inject-meta`

Injects `<meta>` into document head.

## Background

Injects custom `<meta>` into document head. For example, you can use `<meta>` to know what version of your package is being used in a web app.

## How to use

```ts
import { injectMeta, npm } from 'inject-meta';

// Will inject <meta name="my-package" content="1.0.0" /> into document head.
injectMeta('my-package', '1.0.0');

// Will inject <meta name="npm:my-package" content="version=1.0.0" /> into document head.
npm('my-package', { version: '1.0.0' });
```

## API

The following is simplified version of the API. Please refer to our published typings for the full version.

```ts
injectMeta(name: string, content?: string | undefined): void;

npm(name: string, init: { version: string }): void;
```

## Behaviors

## Contributions

Like us? [Star](https://github.com/compulim/inject-meta/stargazers) us.

Want to make it better? [File](https://github.com/compulim/inject-meta/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/inject-meta/pulls) a pull request.
