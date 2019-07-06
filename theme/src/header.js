/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'

export default props => {
  return (
    <header>
      <div
        sx={{
          maxWidth: 'container',
          mx: 'auto',
          px: 3,
          py: 2,
        }}>
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
      </div>
    </header>
  )
}
