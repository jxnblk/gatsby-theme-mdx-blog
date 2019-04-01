import React from 'react'
import { Link } from 'gatsby'
import css from '@styled-system/css'
import {
  useTheme,
  Styled,
  Container,
  Box,
  Button,
} from '@jxnblk/gatsby-theme-mdx-blog'

const modes = [
  'light',
  'dark',
]

export default props => {
  const { mode, setMode } = useTheme()
  if (!mode) setMode('light')

  const cycle = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }

  return (
    <Box as='header' block='header'>
      <Container
        css={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <Styled.h3 fontSize={2} my={0}>
          <Styled.a as={Link} to='/'
            css={css({
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 'bold',
              '&:hover': {
                color: 'primary',
              }
            })}>
            Custom Header
          </Styled.a>
        </Styled.h3>
        <Box mx={2} />
        <Styled.a as={Link} to='/blog'
          css={css({
            color: 'inherit',
            textDecoration: 'none',
            fontWeight: 'bold',
            '&:hover': {
              color: 'primary',
            }
          })}>
          Blog
        </Styled.a>
        <Box mx='auto' />
        <Button onClick={cycle}>
          {mode}
        </Button>
      </Container>
    </Box>
  )
}
