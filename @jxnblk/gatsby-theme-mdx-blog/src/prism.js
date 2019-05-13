export default {
  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: 'gray',
  },
  '.token.punctuation': {
    color: 'gray',
  },
  '.namespace': {
    opacity: '.7'
  },
  '.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted': {
    color: 'highlight',
  },
  '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
    color: 'secondary',
  },
  '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string': {
    color: 'gray',
  },
  '.token.atrule, .token.attr-value, .token.keyword': {
    color: 'primary'
  },
  '.token.function, .token.class-name': {
    color: 'highlight',
  },
  '.token.regex, .token.important, .token.variable': {
    color: 'highlight',
  },
  '.token.important, .token.bold': {
    fontWeight: 'bold'
  },
  '.token.italic': {
    fontStyle: 'italic',
  },
  '.token.entity': {
    cursor: 'help',
  },
}
