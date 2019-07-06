/** @jsx jsx */
import { jsx, Layout } from 'theme-ui'

export const Root = props =>
  <Layout
    {...props}
    sx={{
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    }}
  />

export default Root
