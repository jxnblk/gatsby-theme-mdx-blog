import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Provider from '../provider'
import Post from '../layouts/post'

export default props => {
  const { mdx } = props.data
  const {
    title,
    date,
    draft
  } = mdx.frontmatter
  const children = <MDXRenderer children={mdx.code.body} />

  return (
    <Provider>
      <Post
        {...props}
        title={title}
        date={date}
        draft={draft}
        children={children}
      />
    </Provider>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        draft
      }
      code {
        body
      }
    }
  }
`
