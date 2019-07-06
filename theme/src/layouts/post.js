/** @jsx jsx */
import { jsx, Styled, Main } from 'theme-ui'
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
        <div
          sx={{
            maxWidth: 'container',
            mx: 'auto',
            px: 3,
          }}>
          <Styled.h1>
            {props.title}
          </Styled.h1>
          <Styled.p
            sx={{
              fontSize: [0, 0],
              fontWeight: 'bold',
            }}>
            {props.date}
          </Styled.p>
          {props.children}
        </div>
      </Main>
      <Footer />
    </Root>
  )
}
