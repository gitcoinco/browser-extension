/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Block } from 'particles'
/* --------------------------- Styled Component ----------------------------- */
const HorizontalRule = props => <Block {...props} />
HorizontalRule.defaultProps = {
  is: 'hr',
  b: ['1px solid'],
  bc: 'white',
  style: {
    borderImageSlice: 1
  }
}
export default HorizontalRule