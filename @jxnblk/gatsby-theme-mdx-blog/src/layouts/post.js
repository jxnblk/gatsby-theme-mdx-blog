import React from 'react'
import { useComponents } from 'emotion-mdx'
import Head from '../head'
import Header from '../header'
import Footer from '../footer'

export default props => {
  const Styled = useComponents()

  return (
    <Styled.Layout>
      <Head
        title={props.title}
        description={props.excerpt}
      />
      <Header />
      <Styled.Container>
        <Styled.h1>
          {props.title}
        </Styled.h1>
        <Styled.p fontSize={0}>
          <Styled.strong>
            {props.date}
          </Styled.strong>
        </Styled.p>
        {props.children}
      </Styled.Container>
      <Footer />
    </Styled.Layout>
  )
}
