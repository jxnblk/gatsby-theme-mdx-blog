import React from 'react'
import { useComponents } from 'emotion-mdx'
import Head from '../head'
import Root from '../root'
import Header from '../header'
import Footer from '../footer'
import Container from '../container'

export default props => {
  const Styled = useComponents()

  return (
    <Root>
      <Head
        title={props.title}
        description={props.excerpt}
      />
      <Header />
      <Container>
        <Styled.h1>
          {props.title}
        </Styled.h1>
        <Styled.p
          fontSize={0}
          fontWeight='bold'>
          {props.date}
        </Styled.p>
        {props.children}
      </Container>
      <Footer />
    </Root>
  )
}
