/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import StyleFormDefault from 'static/style/StyleFormDefault'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import HorizontalRule from 'atoms/HorizontalRule'
import FieldsTaxonomy from 'foundry/fields/FieldsTaxonomy'
import FieldsMetadata from 'foundry/fields/FieldsMetadata'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box {...props.wrapper} {...props.wrapperCustom} >
  <Heading level={[3]} f={[3]}>Metadata</Heading>
  <HorizontalRule bs={0} height={2} bi='blue' mx={0} w={[0.075]} />
  <FieldsMetadata {...StyleFormDefault} />
</Box>