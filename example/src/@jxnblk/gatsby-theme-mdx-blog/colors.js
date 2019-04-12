// imports seem to be broken
// import { colors } from '@jxnblk/gatsby-theme-mdx-blog'
// console.log(colors)

import colors from '@jxnblk/gatsby-theme-mdx-blog/src/colors'
import get from 'lodash.get'

// Colors for the theme can be configured by shadowing this file
export default {
  ...colors,
  modes: {
    dark: get(colors, 'modes.dark'),
    book: {
      text: '#321',
      background: '#fefdf6',
      primary: '#a20',
      secondary: '#810',
      muted: '#f0f0e6',
    }
  }
}
