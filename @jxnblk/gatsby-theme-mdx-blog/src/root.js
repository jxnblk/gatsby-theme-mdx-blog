import React from 'react'
import css from '@styled-system/css'
import Box from './box'

export const Root = props =>
  <Box
    {...props}
    block='root'
    css={css({
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    })}
  />

export default Root
