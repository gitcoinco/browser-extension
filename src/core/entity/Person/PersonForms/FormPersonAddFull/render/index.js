/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import { Flex, Box, Button, Heading, ReduxField }from 'atomic'
// Core Field Collections
import {
  FieldsEntityName,
  FieldsContact,
  FieldsBiography,
  FieldsMetadata,
} from 'foundry'

import StyleFormDefault from 'static/style/StyleFormDefault'

/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) => (
<FormBase {...props}>
  <Box w={[1]} mr={[0,0, '5%']} bs={[0]} p={[10,15,35]}>
    <Heading level={[3]} f={[3,5,6]} color='blue' ta='center'>Name</Heading>
    <FieldsEntityName {...StyleFormDefault }/>
  </Box>
  <Box w={[1]} mr={[0,0, '5%']} bs={[0]} mt={[10,20]} p={[10,15,35]}>
    <Heading level={[3]} f={[3,5,6]} color='blue' ta='center'>Metadata</Heading>
    <FieldsMetadata {...StyleFormDefault}/>
  </Box>
  <Box w={[1]} mr={[0,0, '5%']} bs={[0]} mt={[10,20]} p={[10,15,35]}> 
    <Heading level={[3]} f={[3,5,6]} color='blue' ta='center'>Overview</Heading>
    <FieldsBiography {...StyleFormDefault} />
  </Box>
  <Box w={[1]} mr={[0,0, '5%']} bs={[0]} mt={[10,20]} p={[10,15,35]}>
    <Heading level={[3]} f={[3,5,6]} color='blue' ta='center'>Contact</Heading>
    <FieldsContact  {...StyleFormDefault}/>
  </Box>
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Submit</Button>
</FormBase>
)
