/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { jsx, Container, Styled, useColorMode } from 'theme-ui'
import {
  Box,
  Button,
} from '@jxnblk/gatsby-theme-mdx-blog'

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
    <Box as='header' sx={{ variant: 'layout.header' }}>
      <Container
        css={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <Styled.h3
          sx={{
            fontSize: 2,
            m: 0,
          }}>
          <Styled.a as={Link} to='/'
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 'bold',
              '&:hover': {
                color: 'primary',
              }
            }}>
            Custom Header
          </Styled.a>
        </Styled.h3>
        <Box sx={{ mx: 2 }} />
        <Styled.a
          as={Link}
          to='/blog'
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            fontWeight: 'bold',
            '&:hover': {
              color: 'primary',
            }
          }}>
          Blog
        </Styled.a>
        <Box sx={{ mx: 'auto' }} />
        <Button onClick={cycle}>
          {mode}
        </Button>
      </Container>
    </Box>
  )
}
