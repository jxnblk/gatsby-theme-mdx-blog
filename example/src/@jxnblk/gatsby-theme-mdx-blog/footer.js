import React from 'react'
import { useComponents } from '@jxnblk/gatsby-theme-mdx-blog'
// import Footer from '@jxnblk/gatsby-theme-mdx-blog/src/layouts/footer'

export default props => {
  const Styled = useComponents()

  return (
    <Styled.Box as='footer'>
      <Styled.Container>
        Custom Footer
      </Styled.Container>
    </Styled.Box>
  )
}
