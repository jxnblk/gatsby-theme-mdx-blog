import React from 'react'
import {
  ComponentProvider,
  useComponents
} from '@jxnblk/gatsby-theme-mdx-blog'

const Root = props => {
  const Styled = useComponents()
  return (
    <Styled.Layout>
      <Styled.Container>
        {props.children}
      </Styled.Container>
    </Styled.Layout>
  )
}

export default props =>
  <ComponentProvider>
    <Root>
      {props.children}
    </Root>
  </ComponentProvider>
