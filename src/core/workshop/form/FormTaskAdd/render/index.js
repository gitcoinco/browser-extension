/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'
import normalizePhone from 'logic/forms/normalize/phone'
import {
  FieldsEntityName,
  FieldsContact,
  FieldsBiography,
  FieldsMetadata,
  FieldsTaskBasics,
} from 'foundry'
import StyleFormDefault from 'static/style/StyleFormDefault'
/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ handleSubmit, isSubmitting, styled}) => (
<Block {...styled}>
  <FieldsEntityName {...StyleFormDefault}/>
  <FieldsTaskBasics {...StyleFormDefault}/>
  <Button type="submit" onClick={handleSubmit} gradient='cherry' w={1}>Add Task</Button>
</Block>
)