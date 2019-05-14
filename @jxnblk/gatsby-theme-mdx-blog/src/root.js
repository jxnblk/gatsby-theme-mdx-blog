/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

// todo: consider `block` support in theme-ui
export const Root = props =>
  <Box
    {...props}
    block='root'
    css={t => ({
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    })}
  />

export default Root
