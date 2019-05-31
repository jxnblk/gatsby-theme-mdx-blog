import merge from 'lodash.merge'
import components from './components'
import colors from './colors'
import typography from './typography'
import styles from './styles'
import layout from './layout'

export default merge({}, {
  ...typography,
  initialColorMode: 'light',
  colors,
  layout,
  styles,
})
