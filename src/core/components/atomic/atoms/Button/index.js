import React from 'react'
import { hover } from 'styled-system'
import { Block } from 'particles'

const Button = props => <Block {...props}/>
Button.defaultProps = {
  is: 'button',
  bg: 'indigo',
  borderRadius: 4,
  boxShadow: 0,
  color: 'white',
  f: [2],
  py: [5, 22.5],
  px: [10, 17.5],
  ts: ['lightHaze'],
  hover: { 
    boxShadow: 2,
    mt: 2,
    transform: 'translateY(-1px)'
  }
}

export default Button
