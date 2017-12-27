/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'
import {
  FieldsAuthentication,
  FieldsEntityName,
  FieldsMetadata,
} from 'foundry'

import StyleFormDefault from 'static/style/StyleFormDefault'
/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) => {
if(!props.initialValues.createdBy) return null
return <FormBase {...props} bg='white' p={10} >
  <FieldsAuthentication/>
  <FieldsEntityName {...StyleFormDefault}/>
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Add New Article</Button>
</FormBase>
}