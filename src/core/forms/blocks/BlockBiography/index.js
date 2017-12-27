/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import HorizontalRule from 'atoms/HorizontalRule'
import FieldsBiography from 'foundry/fields/FieldsBiography'
import StyleFormDefault from 'static/style/StyleFormDefault'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box {...props.wrapper} {...props.wrapperCustom} >
  <Heading level={[3]} f={[4,5]} color='blue' mb={[10]} >
    Biography
  </Heading>
  <FieldsBiography {...StyleFormDefault} />
</Box>