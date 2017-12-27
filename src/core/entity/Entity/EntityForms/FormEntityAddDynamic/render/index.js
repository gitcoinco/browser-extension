/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import { Flex, Box, Button, Container, InputWrapper, Heading, HorizontalRule, ReduxField }from 'atomic'
import {
  FieldsAuthentication,
  FieldsAddress,
  FieldsAddressAutoComplete,
  FieldsContact,
  FieldsDate,
  FieldsTime,
  FieldsEntityName,
  FieldsMetadata,
  FieldsOrganization,
  FieldsTaxonomy,
  FieldsSettings,
} from 'foundry'
import StyleFormDefault from 'static/style/StyleFormDefault'
import forms from 'forms'



const addressFormStyle = {
    styledInput:{
      bs: 1,
      br: 5,
    },
}

const ExtraFields = props =>
<Box w={[1]} mr={[0,0, '5%']} bs={[0]} p={[10,15,35]}>
  <Heading level={[3]} f={[3,4]} color='blue' mb={[10]} >
    Time
  </Heading>
<FieldsDate {...StyleFormDefault}/>
<FieldsTime {...StyleFormDefault}/>
</Box>

/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) => (
<FormBase {...props}>
  <FieldsAuthentication/>
  <Box w={[1]} mr={[0,0, '5%']} bs={[0]} p={[10,15,35]}>
    <Heading level={[3]} f={[4,5]} color='blue' mb={[10]} >
      Name
    </Heading>
    <FieldsEntityName {...StyleFormDefault }/>
  </Box>

  {!forms[props.formExtend] ? null : React.createElement(forms[props.formExtend])}
  
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Submit</Button>
</FormBase>
)
