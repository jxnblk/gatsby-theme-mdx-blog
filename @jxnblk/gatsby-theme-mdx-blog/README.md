
# @jxnblk/gatsby-theme-mdx-blog

**WIP**
Hyperminimal Gatsby theme for building blogs with MDX

Used in https://jxnblk.com/blog

```sh
npm i @jxnblk/gatsby-theme-mdx-blog
```

## Features

- MDX
- Emotion
- Styled System
- Themeable
- Color modes

## Shadowing

All modules in this theme can be shadowed.
The following modules are *intended* to be shadowed to customize the theme:

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
  // optional color modes
  // modes: {}
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

### `layout.js`

The `layout` object can be used to customize styles for parts of the layout.

```js
// src/@jxnblk/gatsby-theme-mdx-blog/layout.js
export default {
  root: {},
  header: {
    color: 'tomato',
  },
  container: {
    maxWidth: 768,
  },
  footer: {}
}
```

### `styles.js`

The `styles` object can be used to customize styles for all other elements used in the theme.
[View `src/styles.js`](src/styles.js) for reference.

```js
// src/@jxnblk/gatsby-theme-mdx-blog/styles.js
import styles from '@jxnblk/gatsby-theme-mdx-blog/src/styles.js'

export default {
  // merge default styles
  ...styles,
  // override the <h1> styles
  h1: {
    fontSize: 64,
    color: 'tomato',
  },
}
```

### `header.js`

The header component rendered at the top of the page.

```jsx
// src/@jxnblk/gatsby-theme-mdx-blog/header.js
import React from 'react'
import {
  Box,
  Container,
  Styled,
} from '@jxnblk/gatsby-theme-mdx-blog'

export default props => {
  return (
    <Box as='header'>
      <Container>
        <Styled.h2>
          Custom Header
        </Styled.h2>
      </Container>
    </Box>
  )
}
```

### `footer.js`

The footer component rendered at the bottom of the page.

```jsx
// src/@jxnblk/gatsby-theme-mdx-blog/footer.js
import React from 'react'
import {
  Box,
  Container,
} from '@jxnblk/gatsby-theme-mdx-blog'

export default props =>
  <Box as='footer'>
    <Container>
      © 2019 Me, Myself, and I
    </Container>
  </Box>
```

### `layouts/index.js`

The layout component used to render the blog post index page.
View the component source at [`src/layouts/index.js`](src/layouts/index.js) for reference.

### `layouts/post.js`

The layout component used to render the blog post.
View the component source at [`src/layouts/post.js`](src/layouts/post.js) for reference.

## Color Modes

Color modes can be added to a site to dynamically switch between custom color schemes, for example adding a *dark mode*.
By default, this theme includes two color modes: a default light color scheme and a `dark` color scheme.
To enable switching between color modes, shadow a component to add the toggle switch UI, usually the `header.js` component.
Then, import the `useTheme` hook to manage the color mode state.

```jsx
// src/@jxnblk/gatsby-theme-mdx-blog/header.js
import React from 'react'
import { useTheme } from '@jxnblk/gatsby-theme-mdx-blog'

// define optional/custom mode names here
const modes = [
  'light',
  'dark',
]

export default props => {
  const { mode, setMode } = useTheme()

  const cycleMode = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }

  return (
    <header>
      <button onClick={cycleMode}>
        Toggle color mode
      </button>
    </header>
  )
}
```

For a default styled button, you can optionally import the `Button` component from the theme.

```js
import { Button } from '@jxnblk/gatsby-theme-mdx-blog'
```

To define custom color modes, shadow the `colors.js` module and add as many modes as you like.

```js
// src/@jxnblk/gatsby-theme-mdx-blog/colors.js
export default {
  text: '#000',
  background: '#fff',
  primary: '#33e',
  secondary: '#11a',
  muted: '#f6f6f6',
  modes: {
    dark: {
      text: '#fff',
      background: '#000',
      primary: '#0ac',
      secondary: '#0ce',
      muted: '#111',
    },
    // custom color mode
    tomato: {
      text: 'black',
      background: 'tomato',
      primary: 'papayawhip',
      secondary: 'red',
      muted: 'gray',
    },
  }
}
```

## API

- `useTheme`: React hook for using theme state
- `Box`: layout primitive component built with Styled System
- `Root`: styled layout component for wrapping other layout components
- `Container`
- `Button`
- `Styled`

<!--
- `Header`:
- `Footer`
- `useComponents`
- `colors`
- `typography`
- `layout`
- `styles`
- `components`
- `ComponentProvider`
- `Head`
-->

## Options

The following options can be passed to the theme in your site's `gatsby-config.js` file.

```js
// gatsby-config.js
module.exports = {
  __experimentalThemes: [
    {
      resolve: '@jxnblk/gatsby-theme-mdx-blog',
      options: {
        name: 'writing',
        path: 'src/content',
        pageSize: 16,
      }
    }
  ]
}
```

- `name`: path for rendered pages in your site, default `'blog'`
- `path`: path for source folder of MDX blog posts, default `src/posts`
- `pageSize`: number of posts to display per page

:warning: if you change the `path`, make sure you have content already since gatsby relies on having content to generate the frontmatter properly.

MIT License
