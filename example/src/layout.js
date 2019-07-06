/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  Root,
  Header,
} from '@jxnblk/gatsby-theme-mdx-blog'

export default props =>
  <Root>
    <Header />
    <div
      sx={{
        maxWidth: 'container',
        mx: 'auto',
        px: 3,
        py: 4,
      }}>
      {props.children}
    </div>
  </Root>
