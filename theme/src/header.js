/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Container, Styled } from 'theme-ui'

export default props => {
  return (
    <header>
      <Container>
        <Styled.h3
          sx={{
            my: 0
          }}>
          <Link
            to='/'
            sx={{
              color: 'inherit',
              textDecoration: 'none',
            }}>
            Minimal Blog
          </Link>
        </Styled.h3>
      </Container>
    </header>
  )
}
