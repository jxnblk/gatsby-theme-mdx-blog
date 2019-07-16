/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Global } from '@emotion/core'
import Header from './header.mdx'
import Footer from './footer.mdx'

export default props =>
  <Styled.root
    sx={{
      variant: 'layouts.default',
    }}>
    <Global
      styles={{ body: { margin: 0 } }}
    />
    <header>
      <Header />
    </header>
    <main>
      {props.children}
    </main>
    <footer>
      <Footer />
    </footer>
  </Styled.root>
