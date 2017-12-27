/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import { Flex, Box, Button, InputWrapper, Heading, ReduxField, HorizontalRule } from 'atomic'

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
  <Heading level={[3]} f={[4]} mb={[10]} color='blue' >
    Add Organization
  </Heading>
  <FieldsEntityName {...StyleFormDefault}/>
  <HorizontalRule bi='colorWheel' bs={1} w={[1]} />
  <FieldsContact {...StyleFormDefault}/>
  <Heading level={[3]} f={[3]} mt={[10]}>
    Taxonomy
  </Heading>
  <FieldsTaxonomy {...StyleFormDefault}/>
  <Heading level={[3]} f={[3]} my={[10]} >
    Address
  </Heading>
  <InputWrapper>
    <FieldsAddressAutoComplete {...StyleFormDefault} address={props.address} setAddress={props.setAddress} />
  </InputWrapper>
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Add Entity</Button>
</FormBase>
}