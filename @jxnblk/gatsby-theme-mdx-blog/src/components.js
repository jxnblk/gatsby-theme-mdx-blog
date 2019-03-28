import styled from '@emotion/styled'
import css from '@styled-system/css'

const Layout = styled.div(
  css({
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body',
    minHeight: '100vh',
    color: 'text',
    bg: 'background',
  })
)

const Container = styled.div(
  css({
    p: 4,
    mx: 'auto',
  })
)

const Box = styled.div(css())

export default {
  Box,
  Layout,
  Container,
}
