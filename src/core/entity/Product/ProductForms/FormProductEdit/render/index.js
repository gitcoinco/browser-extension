/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import { Flex, Box, Button, Container, Heading, HorizontalRule, ReduxField, Paragraph }from 'atomic'
import {
  FieldsEntityName,
  FieldsAddress,
  FieldsMetadata,
  FieldsOrganization,
  FieldsSettings,
  FieldsPrice,
  FieldsProductShipping,
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
  <Box w={[1]} mr={[0,0, '5%']} bs={[0]} p={[10,15,35]}>
    <Paragraph f={[1]}>
      Price Information
    </Paragraph>
    <FieldsPrice {...StyleFormDefault }/>
  </Box>
  
  <Flex direction={['column', 'row']} mt={[10,20]} >
    <Box w={[1,1,0.5]} mr={[0]} bs={[0]} p={[10,15,25]}>
      <Heading level={[3]} f={[3]}>
        Settings
      </Heading>
      <HorizontalRule bs={0} height={2} bi='blue' mx={0} w={[0.075]} />
      <FieldsSettings {...StyleFormDefault }/>
    </Box>
    <Box w={[1,1,0.5]} mr={[0]} bs={[0]} p={[10,15,35]}>
      <Heading level={[3]} f={[3]}>Organization</Heading>
      <HorizontalRule bs={0} height={2} bi='blue' mx={0} w={[0.075]} />
      <FieldsOrganization {...StyleFormDefault} />
    </Box>
  </Flex>
  <Box w={[1]} mr={[0,0, '5%']} bs={[0]} p={[10,15,35]}>
    <Heading level={[3]} f={[3]}>
      Shipping
    </Heading>
    <FieldsProductShipping {...StyleFormDefault }/>
  </Box>

  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Submit</Button>
</FormBase>
)
