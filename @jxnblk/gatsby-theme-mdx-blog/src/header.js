/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, css, Styled, Box, Container } from 'theme-ui'

export default props => {
  return (
    <Box as='header' block='header'>
      <Container>
        <Styled.h3
          css={{
            my: 0
          }}>
          <Link
            to='/'
            css={{
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Minimal Blog
          </Link>
        </Styled.h3>
      </Container>
    </Box>
  )
}
