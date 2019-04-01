import React from 'react'
import { Link } from 'gatsby'
import {
  ComponentProvider,
  Styled,
  Root
} from '@jxnblk/gatsby-theme-mdx-blog'

const Page = props => {
  return (
    <Root>
      <Styled.h1>Beep</Styled.h1>
      <Styled.a as={Link} to='/'>
        Home
      </Styled.a>
      <Styled.p>
        This page is outside of the theme, but imports styled components from the theme's package.
      </Styled.p>
    </Root>
  )
}

export default props =>
  <ComponentProvider>
    <Page />
  </ComponentProvider>
