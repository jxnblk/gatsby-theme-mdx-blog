import React from 'react'
import { Link } from 'gatsby'
import { useComponents } from 'emotion-mdx'

export default props => {
  const Styled = useComponents()

  return (
    <Styled.Box as='header'>
      <Styled.Container>
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
      </Styled.Container>
    </Styled.Box>
  )
}
