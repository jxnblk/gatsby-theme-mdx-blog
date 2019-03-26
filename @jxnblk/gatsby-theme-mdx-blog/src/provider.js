import React from 'react'
import { ComponentProvider } from 'emotion-mdx'
import { Global } from '@emotion/core'
import components from './components'
import colors from './colors'
import typography from './typography'
import styles from './styles'
import transform from './system'

const theme = {
  ...typography,
  colors,
}

const reset = (
  <Global
    styles={{
      '*': { boxSizing: 'border-box' },
      body: {
        margin: 0
      }
    }}
  />
)

export default props =>
  <ComponentProvider
    components={components}
    transform={transform}
    theme={theme}
    styles={styles}>
    {reset}
    {props.children}
  </ComponentProvider>
