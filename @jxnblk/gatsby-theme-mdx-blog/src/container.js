import React from 'react'
import css from '@styled-system/css'
import Box from './box'

export const Container = props =>
  <Box
    {...props}
    block='container'
    css={css({
      p: 4,
      mx: 'auto',
      width: '100%',
      maxWidth: 832,
      flex: '1 1 auto',
    })}
  />

export default Container
