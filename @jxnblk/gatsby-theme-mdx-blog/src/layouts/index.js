import React from 'react'
import { Link } from 'gatsby'
import { useComponents } from 'emotion-mdx'
import Head from '../head'
import Header from '../header'
import Footer from '../footer'
import Box from '../box'
import Layout from '../layout'
import Container from '../container'

export default props => {
  const {
    previous,
    next,
  } = props.pageContext
  const Styled = useComponents()

  return (
    <Layout>
      <Head />
      <Header />
      <Container>
        <ul
          css={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
          {props.posts.map(post => (
            <li key={post.id}>
              <Link
                to={post.slug}
                css={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <Styled.h2>
                  {post.title}
                </Styled.h2>
                <Styled.p
                  mb={2}
                  fontSize={0}>
                  {post.date}
                </Styled.p>
                <Styled.p>
                  {post.excerpt}
                </Styled.p>
              </Link>
            </li>
          ))}
        </ul>
        <Box
          css={{
            display: 'flex',
          }}
          py={4}>
          {previous && (
            <Styled.a
              as={Link}
              to={previous}
              fontSize={4}
              fontWeight='bold'
            >
              Previous
            </Styled.a>
          )}
          <Box m='auto' />
          {next && (
            <Styled.a
              as={Link}
              to={next}
              fontSize={4}
              fontWeight='bold'
            >
              Next
            </Styled.a>
          )}
        </Box>
      </Container>
      <Footer />
    </Layout>
  )
}
