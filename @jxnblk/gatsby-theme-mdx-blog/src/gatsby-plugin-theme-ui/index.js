import merge from 'lodash.merge'
import components from './components'
import colors from './colors'
import typography from './typography'
import styles from './styles'

const theme = merge({}, typography, {
  colors,
  styles,
})
