import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'
import { css } from 'theme-ui'
import merge from 'lodash.merge'
import components from './components'
import colors from './colors'
import typography from './typography'
import styles from './styles'
import layout from './layout'

const theme = merge({}, {
  ...typography,
  colors,
  layout,
  styles,
})

const reset = (
  <Global
    styles={theme => css({
      '*': { boxSizing: 'border-box' },
      body: {
        margin: 0,
        color: 'text',
        bg: 'background',
      }
    })(theme)}
  />
)

export default props => {
  return (
    <ThemeProvider
      components={components}
      theme={theme}>
      {reset}
      {props.children}
    </ThemeProvider>
  )
}
