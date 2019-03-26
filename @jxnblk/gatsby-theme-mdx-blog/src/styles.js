export default {
  Container: {
    maxWidth: 1024,
  },
  h1: {
    fontSize: 6,
    lineHeight: 1.25,
    m: 0,
  },
  h2: {
    fontSize: [4, 5],
    lineHeight: 1.25,
    m: 0,
  },
  h3: {
    fontSize: 3,
    lineHeight: 1.25,
    mt: 3,
    mb: 2,
  },
  h4: {
    fontSize: 2,
    m: 0,
  },
  p: {
    m: 0,
    mb: 4,
  },
  a: {
    color: 'primary',
    '&:hover': {
      color: 'secondary',
    }
  },
  pre: {
    fontFamily: 'monospace',
    p: 3,
    color: 'secondary',
    bg: 'muted',
    borderRadius: 4,
  },
  code: {
    fontFamily: 'monospace',
  },
  inlineCode: {
    fontFamily: 'monospace',
    color: 'secondary',
  },
}
