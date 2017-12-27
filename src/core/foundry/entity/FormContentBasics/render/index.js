/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'
import { FormBase } from 'foundry'
import StyleFormDefault from 'static/style/StyleFormDefault'
/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ handleSubmit, isSubmitting, styled, ...props}) => {
return <FormBase {...props} bg='white' p={10} >
  <Box>
    <Field name="contentTitle" placeholder="Title" component={ReduxField} type="text"  styledInput={{br:7, bs:0}} />
    <Field name="contentTagline" placeholder="Tagline" component={ReduxField} type="text" styledField={{mt:[10]}} styledInput={{br:7, bs:0}} />
  </Box>
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
  </Box>
</FormBase>
}