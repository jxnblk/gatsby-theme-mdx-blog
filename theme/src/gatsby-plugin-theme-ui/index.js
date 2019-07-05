import merge from 'lodash.merge'
import colors from './colors'
import typography from './typography'
import styles from './styles'

const theme = merge({}, typography, {
  initialColorMode: 'light',
  colors,
  styles,
})

export default theme
