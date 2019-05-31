import React from 'react'
import { Link } from 'gatsby'
import css from '@styled-system/css'
import {
  Styled,
  Container,
  Box,
  Button,
} from '@jxnblk/gatsby-theme-mdx-blog'
import { useColorMode } from 'theme-ui'

const modes = [
  'light',
  'dark',
]

export default props => {
  const [ mode, setMode ] = useColorMode()

  const cycle = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }

  return (
    <Box as='header' css={css({ variant: 'layout.header' })}>
      <Container
        css={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <Styled.h3
          css={css({
            fontSize: 2,
            m: 0,
          })}>
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
        <Styled.a
          as={Link}
          to='/blog'
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
