import React from 'react'
import { Link } from 'gatsby'
import { ComponentProvider, useComponents } from '@jxnblk/gatsby-theme-mdx-blog'

const Page = props => {
  const Styled = useComponents()
  return (
    <Styled.Layout>
      <Styled.h1>Beep</Styled.h1>
      <Styled.a as={Link} to='/'>
        Home
      </Styled.a>
      <Styled.p>
        This page is outside of the theme, but imports styled components from the theme's package.
      </Styled.p>
    </Styled.Layout>
  )
}

export default props =>
  <ComponentProvider>
    <Page />
  </ComponentProvider>
