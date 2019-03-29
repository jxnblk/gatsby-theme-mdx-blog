import React from 'react'
import Box from './box'

export const Layout = props =>
  <Box
    {...props}
    block='layout'
    cx={{
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      color: 'text',
      bg: 'background',
    }}
  />

export default Layout
