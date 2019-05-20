import React from 'react'
import {
  ColorModeProvider,
  useColorMode
} from 'theme-ui'

export {
  css,
  Styled,
  Box,
} from 'theme-ui'

// config
export { default as colors } from './colors'
export { default as typography } from './typography'
export { default as layout } from './layout'
export { default as styles } from './styles'
export { default as components } from './components'

export { default as ThemeProvider } from './provider'
export { default as Root } from './root'
export { default as Container } from './container'
export { default as Button } from './button'
export { default as Head } from './head'
export { default as Header } from './header'
export { default as Footer } from './footer'

export const wrapRootElement = ({ element }) =>
  <ColorModeProvider initialColorMode='light'>
    {element}
  </ColorModeProvider>

// backwards compatibility
export const useTheme = () => {
  const [ mode, setMode ] = useColorMode()
  return { mode, setMode }
}

// backwards compatibility
export { default as ComponentProvider } from './provider'
