/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'
import Paragraph from 'atoms/Paragraph'
import Form from 'molecules/Form'
import StyleFieldDefault from 'static/style/StyleFieldDefault'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) => (
<Form {...styled}>
  <Heading level={[3]} f={[3]}>
    Generic Form
  </Heading>
  <Field name="genericField" placeholder="Generic Field" component={ReduxField} type="text" {...StyleFieldDefault} />
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
  </Box>
</Form>
)