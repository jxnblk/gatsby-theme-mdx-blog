import React from 'react'
import { ComponentProvider } from 'emotion-mdx'
import { Global } from '@emotion/core'
import css from '@styled-system/css'
import merge from 'lodash.merge'
import get from 'lodash.get'
import { useTheme } from './context'
import components from './components'
import colors from './colors'
import typography from './typography'
import styles from './styles'
import layout from './layout'

const getTheme = mode => merge({}, {
  ...typography,
  colors,
  layout,
}, {
  colors: get(colors.modes, mode, colors)
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
  const { mode } = useTheme()
  const theme = getTheme(mode)
  theme.styles = styles

  return (
    <ComponentProvider
      components={components}
      transform={css}
      theme={theme}>
      {reset}
      {props.children}
    </ComponentProvider>
  )
}
