import React from 'react'
import { css, ThemeProvider, Layout } from 'theme-ui'
import { Global } from '@emotion/core'
import components from './components'

export const Root = props =>
  <ThemeProvider components={components}>
    <Global
      styles={{
        '*': { boxSizing: 'border-box' },
        body: {
          margin: 0,
        }
      }}
    />
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
