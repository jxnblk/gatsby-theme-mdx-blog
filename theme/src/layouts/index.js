/** @jsx jsx */
import { jsx, Styled, Main } from 'theme-ui'
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
      <Main>
        <div
          sx={{
            maxWidth: 'container',
            mx: 'auto',
            px: 3,
          }}>
          <ul
            sx={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
            {props.posts.map(post => (
              <li key={post.id}>
                <Link
                  to={post.slug}
                  sx={{
                    display: 'block',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <Styled.h2
                    sx={{
                      fontSize: [5, 6]
                    }}>
                    {post.title}
                  </Styled.h2>
                  <Styled.p
                    sx={{
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
          <div
            sx={{
              display: 'flex',
            }}
            py={4}>
            {previous && (
              <Styled.a
                as={Link}
                to={previous}
                sx={{
                  fontSize: 4,
                  fontWeight: 'bold',
                  color: 'inherit',
                  textDecoration: 'none',
                }}>
                Previous
              </Styled.a>
            )}
            <div sx={{ m: 'auto' }} />
            {next && (
              <Styled.a
                as={Link}
                to={next}
                sx={{
                  fontSize: 4,
                  fontWeight: 'bold',
                  color: 'inherit',
                  textDecoration: 'none',
                }}>
                Next
              </Styled.a>
            )}
          </div>
        </div>
      </Main>
      <Footer />
    </Root>
  )
}
