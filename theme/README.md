
# @jxnblk/gatsby-theme-mdx-blog

**WIP**
Hyperminimal Gatsby theme for building blogs with MDX

Used in https://jxnblk.com/blog

```sh
npm i @jxnblk/gatsby-theme-mdx-blog
```

## Features

- [MDX][]
- [Theme UI][]
- [Color modes][]

[mdx]: https://mdxjs.com
[theme ui]: https://theme-ui.com
[color modes]: https://theme-ui.com/color-modes

## Theming

The blog can be completely themed using Theme UI.

TK

## Color Modes

Color modes can be added to a site to dynamically switch between custom color schemes, for example adding a *dark mode*.
By default, this theme includes two color modes: a default light color scheme and a `dark` color scheme.
To enable switching between color modes, shadow a component to add the toggle switch UI, usually the `header.js` component.
Then, import the `useColorMode` hook to manage the color mode state.

```jsx
// src/@jxnblk/gatsby-theme-mdx-blog/header.js
import React from 'react'
import { useColorMode } from '@jxnblk/gatsby-theme-mdx-blog'

// define optional/custom mode names here
const modes = [
  'light',
  'dark',
]

export default props => {
  const [ mode, setMode ] = useColorMode()

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

To define custom color modes, shadow the `gatsby-plugin-theme-ui/colors.js` module and add as many modes as you like.

```js
// src/@jxnblk/gatsby-theme-mdx-blog/src/gatsby-plugin-theme-ui/colors.js
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

## Options

The following options can be passed to the theme in your site's `gatsby-config.js` file.

```js
// gatsby-config.js
module.exports = {
  plugins: [
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

- `name`: path for rendered pages in your site, default `''`
- `path`: path for source folder of MDX blog posts, default `src/posts`
- `pageSize`: number of posts to display per page

MIT License
