import React from 'react'
import { Link } from 'gatsby'
import { css, Box, Styled } from 'theme-ui'
import Container from './container'

export default props => {
  return (
    <Box
      as='header'
      css={css({
        variant: 'layout.header'
      })}>
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
    </Box>
  )
}
