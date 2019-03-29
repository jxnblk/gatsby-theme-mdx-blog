import React from 'react'
import { Link } from 'gatsby'
import { useComponents } from 'emotion-mdx'
import Box from './box'
import Container from './container'

export default props => {
  const Styled = useComponents()

  return (
    <Box as='header' block='header'>
      <Container>
        <Styled.h3 my={0}>
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
