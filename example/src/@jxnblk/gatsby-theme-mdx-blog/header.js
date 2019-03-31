import React from 'react'
import { Link } from 'gatsby'
import css from '@styled-system/css'
import {
  useTheme,
  useComponents,
  Container,
  Box,
} from '@jxnblk/gatsby-theme-mdx-blog'

const modes = [
  'light',
  'dark',
  // 'book',
]
const cycle = (arr, item) => {
  const i = (arr.indexOf(item) + 1) % arr.length
  return arr[i]
}

export default props => {
  const { mode, setMode } = useTheme()
  const Styled = useComponents({
    a: {
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'bold',
      '&:hover': {
        color: 'primary',
      }
    }
  })

  return (
    <header>
      <Container
        css={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <Styled.h3 fontSize={2} my={0}>
          <Styled.a as={Link} to='/'>
            Custom Header
          </Styled.a>
        </Styled.h3>
        <Box mx={2} />
        <Styled.a as={Link} to='/blog'>
          Blog
        </Styled.a>
        <Box mx='auto' />
        <button
          css={css({
            appearance: 'none',
            fontFamily: 'inherit',
            fontWeight: 'bold',
            fontSize: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            p: 12,
            color: 'inherit',
            bg: 'muted',
            border: 0,
            '&:focus': {
              outline: '2px solid',
            }
          })}
          onClick={e => {
            setMode(cycle(modes, mode))
          }}>
          {mode}
        </button>
      </Container>
    </header>
  )
}
