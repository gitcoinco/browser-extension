/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import FormBase from 'workshop/form/FormBase'
import { Flex, Box, Button, InputWrapper, Heading, ReduxField,  } from 'atomic'

import {
  FieldsAuthentication,
  FieldsAddress,
  FieldsAddressAutoComplete,
  FieldsContact,
  FieldsEntityName,
  FieldsMetadata,
  FieldsOrganization,
  FieldsTaxonomy,
  FieldsSettings,
  FieldsBiography,
} from 'foundry'

import StyleFormDefault from 'static/style/StyleFormDefault'
/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) => {
if(!props.initialValues.createdBy) return null
return <FormBase {...props}
  bg='white'
  color='charcoal'
  p={10} >
  <FieldsAuthentication/>
  <Heading level={[3]} f={[3]} mb={[10]} >
    Name
  </Heading>
  <FieldsEntityName {...StyleFormDefault}/>
  <Heading level={[3]} f={[3]} my={[10]} >
    Address
  </Heading>
  <InputWrapper>
    <FieldsAddressAutoComplete {...StyleFormDefault} address={props.address} setAddress={props.setAddress} />
  </InputWrapper>
  <Heading level={[3]} f={[3]} mt={[10]}>
    Taxonomy
  </Heading>
  <FieldsTaxonomy {...StyleFormDefault}/>
  <Button onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Add New Project</Button>
</FormBase>
}