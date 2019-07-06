import React from 'react'
import { Container } from 'theme-ui'
import {
  Root,
  Header,
} from '@jxnblk/gatsby-theme-mdx-blog'

export default props =>
  <Root>
    <Header />
    <Container>
      {props.children}
    </Container>
  </Root>
