import React from 'react'
import { Link } from 'gatsby'
import { useComponents } from 'emotion-mdx'
import Head from '../head'
import Box from '../box'
import Root from '../Root'
import Header from '../header'
import Footer from '../footer'
import Container from '../container'

export default props => {
  const {
    previous,
    next,
  } = props.pageContext
  const Styled = useComponents()

  return (
    <Root>
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
                <Styled.h2 fontSize={[5, 6]}>
                  {post.title}
                </Styled.h2>
                <Styled.p
                  mb={4}
                  fontWeight='bold'
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
              color='inherit'
              css={{
                textDecoration: 'none',
              }}
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
              color='inherit'
              css={{
                textDecoration: 'none',
              }}
            >
              Next
            </Styled.a>
          )}
        </Box>
      </Container>
      <Footer />
    </Root>
  )
}
