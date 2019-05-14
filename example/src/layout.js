import React from 'react'
import {
  ThemeProvider,
  Root,
  Container,
  Header,
} from '@jxnblk/gatsby-theme-mdx-blog'

export default props =>
  <ThemeProvider>
    <Root>
      <Header />
      <Container>
        {props.children}
      </Container>
    </Root>
  </ThemeProvider>
