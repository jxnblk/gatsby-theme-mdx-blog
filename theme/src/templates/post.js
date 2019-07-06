import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Post from '../layouts/post'

export default props => {
  const { mdx } = props.data
  const {
    title,
    date,
    draft
  } = mdx.frontmatter
  const children = <MDXRenderer children={mdx.body} />

  return (
    <Post
      {...props}
      title={title}
      date={date}
      draft={draft}
      children={children}
    />
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        draft
      }
      body
    }
  }
`
