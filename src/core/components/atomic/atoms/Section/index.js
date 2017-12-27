/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Block } from 'particles'
/* --------------------------- Styled Component ----------------------------- */
const Section = props => <Block {...props} />
Section.defaultProps = {
  is: 'section',
  pos: 'relative',
}
export default Section