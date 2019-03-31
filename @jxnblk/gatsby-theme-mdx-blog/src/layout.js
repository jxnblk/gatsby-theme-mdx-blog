import React from 'react'
import css from '@styled-system/css'
import Box from './box'

export const Layout = props =>
  <Box
    {...props}
    block='layout'
    css={css({
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    })}
  />

export default Layout
