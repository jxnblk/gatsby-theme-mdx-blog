import React from 'react'
import { Link } from 'gatsby'
import css from '@styled-system/css'
import { Styled } from './index'
import Box from './box'
import Container from './container'

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
