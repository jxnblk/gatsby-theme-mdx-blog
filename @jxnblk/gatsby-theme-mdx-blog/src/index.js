import React, { useState, useEffect, useLayoutEffect } from 'react'
import { ThemeContext } from './context'

export {
  jsx,
  css,
  Styled,
  Box,
  Container,
} from 'theme-ui'

// config
export { default as colors } from './colors'
export { default as typography } from './typography'
export { default as layout } from './layout'
export { default as styles } from './styles'
export { default as components } from './components'

export { default as ThemeProvider } from './provider'
export { default as ComponentProvider } from './provider'
export { default as Root } from './root'

export { default as Button } from './button'
export { default as Head } from './head'
export { default as Header } from './header'
export { default as Footer } from './footer'

export { ThemeContext, useTheme } from './context'

const Provider = props => {
  const [ mode, setMode ] = useState('light')
  const context = {
    mode,
    setMode
  }

  useLayoutEffect(() => {
    const initialMode = window.localStorage.getItem('mode') || 'light'
    if (initialMode !== mode) {
      setMode(initialMode)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('mode', mode)
  }, [ mode ])

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const wrapRootElement = ({ element }) =>
  <Provider>
    {element}
  </Provider>
