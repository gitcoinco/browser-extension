/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import { Flex, Box, Button, Container, Heading, HorizontalRule, ReduxField }from 'atomic'
import {
  FieldsAddress,
  FieldsContact,
  FieldsEntityName,
  FieldsMetadata,
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


  <Box w={[1]} mr={[0,0, '5%']} bs={[0]} p={[10,15,35]}>
    <FieldsEntityName {...StyleFormDefault }/>
  </Box>
  
  <Flex direction={['column', 'row']} mt={[10,20]} >
    <Box w={[1,1,0.5]} mr={[0]} bs={[0]} p={[10,15,25]}>
      <Heading level={[3]} f={[3]}>Tagging + Metadata</Heading>
      <HorizontalRule bs={0} height={2} bi='blue' mx={0} w={[0.075]} />
      <FieldsMetadata {...StyleFormDefault} />
    </Box>
    <Box w={[1,1,0.5]} mr={[0]} bs={[0]} p={[10,15,35]}>
      <Heading level={[3]} f={[3]}>Settings</Heading>
      <HorizontalRule bs={0} height={2} bi='blue' mx={0} w={[0.075]} />

    </Box>
  </Flex>

  <Box w={[1]} mr={[0,0, '5%']} bs={[0]} p={[10,15,35]} mt={[10,20]}>
    <FieldsBiography {...StyleFormDefault} />
  </Box>
  <Box w={[1]} mr={[0,0, '5%']} bs={[0]} p={[10,15,35]} mt={[10,20]}>
    <FieldsAddress {...addressFormStyle} />
  </Box>
  <Box w={[1]} mr={[0,0, '5%']} bs={[0]} p={[10,15,35]} mt={[10,20]}>
    <FieldsContact  {...StyleFormDefault }/>
  </Box>
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Submit</Button>
</FormBase>
)
