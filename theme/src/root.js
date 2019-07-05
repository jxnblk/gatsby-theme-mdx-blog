import React from 'react'
import { css, Layout } from 'theme-ui'

export const Root = props =>
  <Layout
    {...props}
    css={css({
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    })}
  />

export default Root
