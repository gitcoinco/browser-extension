/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex }from 'atomic'
import FieldsStatic from './fields.js'
import FormBlocks from 'forms/blocks' 
const BlockStyle = {
 wrapper: {
   bs:0,
   p:[10,25,35],
   mt:[10,20],
   w: [1]
 } 
}

export default props =>
<Flex direction={['column']} mt={[10,20]} >
  
  {
    FieldsStatic.map(blocks=>
      React.createElement(
        Flex, // components
        {...blocks.styledProps},
        blocks.childrenBlocks.map(block=> !FormBlocks[block.component] ? null : React.createElement(
          FormBlocks[block.component], // components
          {...BlockStyle, ...block.styledProps}, // props
        ))
      )
    )
  }

</Flex>