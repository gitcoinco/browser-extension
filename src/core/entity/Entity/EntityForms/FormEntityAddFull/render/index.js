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
  FieldsEntityName,
  FieldsMetadata,
  FieldsOrganization,
  FieldsTaxonomy,
  FieldsSettings,
  FieldsBiography,
} from 'foundry'
import StyleFormDefault from 'static/style/StyleFormDefault'
const addressFormStyle = {
    styledInput:{
      bs: 1,
      br: 5,
    },
}

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

  <Flex direction={['column', 'row']} mt={[10,20]} >
    <Box w={[1,1,0.5]} mr={[10]} bs={[0]} p={[10,15,35]}>
      <Heading level={[3]} f={[3,4]} color='blue' mb={[10]} >
      Address
    </Heading>
    <HorizontalRule bs={0} height={2} bi='blue' mx={0} w={[0.075]} />
    <InputWrapper>
      <FieldsAddressAutoComplete {...StyleFormDefault} address={props.address} setAddress={props.setAddress} />
    </InputWrapper>
    </Box>
    <Box w={[1,1,0.5]} ml={[10]} bs={[0]} p={[10,15,35]}>
      <Heading level={[3]} f={[3,4]} color='blue' mb={[10]} >
        Contact
      </Heading>
      <HorizontalRule bs={0} height={2} bi='blue' mx={0} w={[0.075]} />
      <FieldsContact  {...StyleFormDefault }/>
    </Box>
  </Flex>

  <Flex direction={['column', 'row']} mt={[10,20]} >
    <Box w={[1,1,0.5]} mr={[10]} bs={[0]} p={[10,15,25]}>
      <Heading level={[3]} f={[3]}>Metadata</Heading>
      <HorizontalRule bs={0} height={2} bi='blue' mx={0} w={[0.075]} />
      <FieldsMetadata {...StyleFormDefault} />
    </Box>
    <Box w={[1,1,0.5]} ml={[10]} bs={[0]} p={[10,15,35]}>
      <Heading level={[3]} f={[3]}>Taxonomy</Heading>
      <HorizontalRule bs={0} height={2} bi='blue' mx={0} w={[0.075]} />
      <FieldsTaxonomy {...StyleFormDefault} />
    </Box>
  </Flex>

  <Box w={[1]} mr={[0,0, '5%']} bs={[0]} p={[10,15,35]} mt={[10,20]}>
    <Heading level={[3]} f={[4,5]} color='blue' mb={[10]} >
      Biography
    </Heading>
    <FieldsBiography {...StyleFormDefault} />
  </Box>
  
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Submit</Button>
</FormBase>
)
