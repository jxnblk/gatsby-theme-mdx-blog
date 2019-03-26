import {
  compose,
  space,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  color
} from 'styled-system'
import omit from 'lodash.omit'
import pick from 'lodash.pick'

const systemProps = [
  'theme',
  'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my',
  'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'color',
  'bg',
  'backgroundColor',
]

const css = props => omit(props, systemProps)

const typeSystem = compose(
  css,
  space,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  color
)

const notEmpty = n => Object.keys(n).length > 0

const transform = style => props => {
  const { theme } = props
  const styleProps = pick(props, systemProps)
  const styles = [
    ...typeSystem({ theme, ...style, ...styleProps })
  ]
  for (const key in style) {
    const value = style[key]
    if (!value || typeof value !== 'object') continue
    styles.push({
      [key]: transform(value)({ theme })
    })
  }
  return styles.filter(Boolean).filter(notEmpty)
}

export default transform
