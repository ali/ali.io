import React, { PropTypes } from 'react'

export const A = ({ href = '#', target = '_blank', children, ...rest }) => (
  <a {...rest} href={href} target={target} rel='noopener noreferrer'>
    {children}
  </a>
)

export const P = ({ children }) => (
  <p className='P'>
    {children}
    <style jsx>
    {`
      .P {
        line-height: 1.6;
      }
    `}
    </style>
  </p>
)