/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import HorizontalRule from 'atoms/HorizontalRule'
import FieldsContact from 'foundry/fields/FieldsContact'
import StyleFormDefault from 'static/style/StyleFormDefault'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box {...props.wrapper} {...props.wrapperCustom} >
  <Heading level={[3]} f={[3,4]} color='blue' mb={[10]} >
    Contact
  </Heading>
  <HorizontalRule bs={0} height={2} bi='blue' mx={0} w={[0.075]} />
  <FieldsContact  {...StyleFormDefault }/>
</Box>