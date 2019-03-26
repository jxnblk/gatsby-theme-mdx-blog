import styled from '@emotion/styled'
import system from './system'

const Layout = styled.div(
  system({
    fontFamily: 'body',
    lineHeight: 'body',
    minHeight: '100vh',
    color: 'text',
    bg: 'background',
  })
)

const Container = styled.div(
  system({
    p: 4,
    mx: 'auto',
  })
)

const Box = styled.div(system())

export default {
  Box,
  Layout,
  Container,
}
