/** @jsx jsx */
import { jsx, Styled, Box, Container } from 'theme-ui'
import { Link } from 'gatsby'
import Head from '../head'
import Root from '../root'
import Header from '../header'
import Footer from '../footer'

export default props => {
  const {
    previous,
    next,
  } = props.pageContext

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
                <Styled.h2
                  css={{
                    fontSize: [5, 6]
                  }}>
                  {post.title}
                </Styled.h2>
                <Styled.p
                  css={{
                    mb: 4,
                    fontSize: [0, 0],
                    fontWeight: 'bold',
                  }}>
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
              css={{
                fontSize: 4,
                fontWeight: 'bold',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              Previous
            </Styled.a>
          )}
          <Box m='auto' />
          {next && (
            <Styled.a
              as={Link}
              to={next}
              css={{
                fontSize: 4,
                fontWeight: 'bold',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              Next
            </Styled.a>
          )}
        </Box>
      </Container>
      <Footer />
    </Root>
  )
}
