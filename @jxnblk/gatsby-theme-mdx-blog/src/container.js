import React from 'react'
import { css, Container } from 'theme-ui'

export default props =>
  <Container
    {...props}
    css={css({
      variant: 'layout.container'
    })}
  />
