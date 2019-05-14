/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'
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
      <Container>
        <Styled.h1>
          {props.title}
        </Styled.h1>
        <Styled.p
          css={{
            fontSize: [0, 0],
            fontWeight: 'bold',
          }}>
          {props.date}
        </Styled.p>
        {props.children}
      </Container>
      <Footer />
    </Root>
  )
}
