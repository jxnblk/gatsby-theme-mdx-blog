import React from 'react'
import {
  ComponentProvider,
  Layout,
  Container,
  Header,
} from '@jxnblk/gatsby-theme-mdx-blog'

const Root = props =>
  <Layout>
    <Header />
    <Container>
      {props.children}
    </Container>
  </Layout>

export default props =>
  <ComponentProvider>
    <Root>
      {props.children}
    </Root>
  </ComponentProvider>
