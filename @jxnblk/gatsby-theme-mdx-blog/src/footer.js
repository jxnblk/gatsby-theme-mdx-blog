import React from 'react'
import { useComponents } from 'emotion-mdx'

export default props => {
  const Styled = useComponents()

  return (
    <Styled.Box as='footer'>
      <Styled.Container>
        © 2019 Jxnblk
      </Styled.Container>
    </Styled.Box>
  )
}
