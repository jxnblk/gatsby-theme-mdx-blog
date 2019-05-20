import React from 'react'
import { css, Box } from 'theme-ui'
import Container from './container'

export default props =>
  <Box as='footer' css={css({ variant: 'layout.footer' })}>
    <Container>
      © 2019 Jxnblk
    </Container>
  </Box>
