import React from 'react'
import { Link } from 'gatsby'
import { css, Container, Styled } from 'theme-ui'

export default props => {
  return (
    <header>
      <Container>
        <Styled.h3
          css={css({
            my: 0
          })}>
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
    </header>
  )
}
