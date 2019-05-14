/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

export default props =>
  <Box
    as='button'
    {...props}
    css={{
      appearance: 'none',
      fontFamily: 'inherit',
      fontWeight: 'bold',
      fontSize: 0,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      p: 12,
      color: 'inherit',
      bg: 'muted',
      border: 0,
      '&:focus': {
        outline: '2px solid',
      }
    }}
  />
