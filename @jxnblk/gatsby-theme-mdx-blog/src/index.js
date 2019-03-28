import React, { useState } from 'react'
import { ThemeContext } from './context'

export { useComponents, Styled } from 'emotion-mdx'
export { default as colors } from './colors'
export { default as typography } from './typography'
export { default as components } from './components'
export { default as styles } from './styles'
export { default as ComponentProvider } from './provider'
export { ThemeContext, useTheme } from './context'

const Root = props => {
  const [ mode, setMode ] = useState('normal')
  const context = {
    mode,
    setMode
  }
  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const wrapRootElement = ({ element }) =>
  <Root>
    {element}
  </Root>
