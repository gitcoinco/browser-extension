/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'
import normalizePhone from 'logic/forms/normalize/phone'
import {
  FieldsAuthentication,
  FormBase,
} from 'foundry'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, ...props}) => {
if(!props.initialValues.createdBy) return null
return <FormBase {...props} bg='white' p={10} >
    <FieldsAuthentication/>
    <Field name="contentBody" placeholder="Write a status update. Please and thank you :)" component={ReduxField} type="textarea" />
    <Button type="submit" onClick={handleSubmit} gradient='cherry' w={1}>Add Project Update</Button>
</FormBase>
}