import React from 'react'
import {
  ComponentProvider,
  Root,
  Container,
  Header,
} from '@jxnblk/gatsby-theme-mdx-blog'

export default props =>
  <ComponentProvider>
    <Root>
      <Header />
      <Container>
        {props.children}
      </Container>
    </Root>
  </ComponentProvider>
