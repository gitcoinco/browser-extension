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
  FieldsDate,
  FieldsTime,
} from 'foundry'

import StyleFormDefault from 'static/style/StyleFormDefault'
/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) => (
<FormBase {...props} bg='white' p={10} >
  <FieldsAuthentication/>
  <FieldsEntityName {...StyleFormDefault}/>
  <Heading level={[3]} f={[3]}>Schedule</Heading>
  <FieldsDate {...StyleFormDefault}/>
  <FieldsTime {...StyleFormDefault}/>
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Add New Event</Button>
</FormBase>
)

