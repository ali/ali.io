import React from 'react'
import styled from 'emotion/react'

export const A = ({ href = '#', target = '_blank', children, ...rest }) => (
  <a {...rest} href={href} target={target} rel='noopener noreferrer'>
    {children}
  </a>
)

export const P = styled('p')`
  line-height: 1.6;
`
