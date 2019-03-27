import React, {
  useState
} from 'react'
import { ComponentProvider } from 'emotion-mdx'
import { Global } from '@emotion/core'
import transform from '@styled-system/css'
import merge from 'lodash.merge'
import get from 'lodash.get'
import { ThemeContext } from './context'
import components from './components'
import colors from './colors'
import typography from './typography'
import styles from './styles'

const getTheme = mode => merge({}, {
  ...typography,
  colors,
}, {
  colors: get(colors.modes, mode, colors)
})

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

export default props => {
  const [ mode, setMode ] = useState('normal')
  const context = {
    mode,
    setMode
  }
  const theme = getTheme(mode)

  return (
    <ThemeContext.Provider value={context}>
      <ComponentProvider
        components={components}
        transform={transform}
        theme={theme}
        styles={styles}>
        {reset}
        {props.children}
      </ComponentProvider>
    </ThemeContext.Provider>
  )
}
