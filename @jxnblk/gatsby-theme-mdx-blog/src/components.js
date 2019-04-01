import React from 'react'

const heading = Tag => ({ id, ...props }) => !id
  ? <Tag {...props} />
  : (
    <Tag {...props}>
      <a
        href={'#' + props.id}
        css={{
          color: 'inherit',
          textDecoration: 'none',
        }}>
        {props.children}
      </a>
    </Tag>
  )

export default {
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
}
