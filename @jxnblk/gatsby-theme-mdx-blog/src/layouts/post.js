import React from 'react'
import { css, Styled, Main } from 'theme-ui'
import Container from '../container'
import Head from '../head'
import Root from '../root'
import Header from '../header'
import Footer from '../footer'

export default props => {
  return (
    <Root>
      <Head
        title={props.title}
        description={props.excerpt}
      />
      <Header />
      <Main>
        <Container
          css={css({
            variant: 'layout.container',
          })}>
          <Styled.h1>
            {props.title}
          </Styled.h1>
          <Styled.p
            css={css({
              fontSize: [0, 0],
              fontWeight: 'bold',
            })}>
            {props.date}
          </Styled.p>
          {props.children}
        </Container>
      </Main>
      <Footer />
    </Root>
  )
}
