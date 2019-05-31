import React from 'react'
import {
  Root,
  Container,
  Header,
} from '@jxnblk/gatsby-theme-mdx-blog'

export default props =>
  <Root>
    <Header />
    <Container>
      {props.children}
    </Container>
  </Root>
