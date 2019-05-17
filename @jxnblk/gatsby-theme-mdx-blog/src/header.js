import React from 'react'
import { Link } from 'gatsby'
import { css, Styled, Box, Container } from 'theme-ui'

export default props => {
  return (
    <Box as='header' block='header'>
      <Container>
        <Styled.h3
          css={css({
            my: 0
          })}>
          <Link
            to='/'
            css={css({
              color: 'inherit',
              textDecoration: 'none',
            })}>
            Minimal Blog
          </Link>
        </Styled.h3>
      </Container>
    </Box>
  )
}
