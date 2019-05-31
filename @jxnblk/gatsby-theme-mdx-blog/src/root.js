import React from 'react'
import { css, ThemeProvider, Layout } from 'theme-ui'
import components from './components'

export const Root = props =>
  <ThemeProvider components={components}>
    <Layout
      {...props}
      css={css({
        variant: 'layout.root',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
      })}
    />
  </ThemeProvider>

export default Root
