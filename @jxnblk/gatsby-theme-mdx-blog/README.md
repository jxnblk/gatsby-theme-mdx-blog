
# @jxnblk/gatsby-theme-mdx-blog

Hyperminimal Gatsby theme for building blogs with MDX

```sh
npm i @jxnblk/gatsby-theme-mdx-blog
```

## Features

- MDX
- Emotion
- Styled System

## Shadowing

The following modules are intended to be shadowed to customize the theme:

### `colors.js`

Change the theme's default color scheme by shadowing this module and providing colors with the following shape:

```js
// src/@jxnblk/gatsby-theme-mdx-blog/colors.js
export default {
  text: '#222',
  background: '#fff',
  primary: '#07c',
  secondary: '#05a',
  muted: '#f6f6f9',
}
```

### `typography.js`

The `typography` object can be shadowed to change default fonts and typographic styles.

```js
// src/@jxnblk/gatsby-theme-mdx-blog/typography.js
export default {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
}
```

### `styles.js`
### `header.js`
### `footer.js`
### `layouts/index.js`
### `layouts/post.js`

## Color Modes

Color modes can be added to a site to dynamically switch between custom color schemes, such as a *dark mode*.

## API

- `useTheme`
- `Styled`
- `Box`
- `Layout`
- `Container`

## Options

- `name`
- `path`
- `pageSize`

