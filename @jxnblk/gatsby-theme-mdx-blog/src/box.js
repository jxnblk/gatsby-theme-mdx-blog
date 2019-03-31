import styled from '@emotion/styled'
import css from '@styled-system/css'
import { width } from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

export const block = name => props => {
  const theme = props.theme || props
  return css(theme.blocks[name])({ theme })
}

export const Box = styled('div', {
  shouldForwardProp
})(css({
  boxSizing: 'border-box',
  minWidth: 0,
}),
  props => block(props.block)(props),
  width
)

export default Box
