/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box, Block } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import {Button, Heading, ReduxField } from 'atomic'

/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = styled(Block)`
  background: #FFF;
  display: block;
  padding: 20px;
`

FormWrapper.defaultProps = {
  is: 'form'
}

/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, layout } = props
  return (
    <FormWrapper  {...layout} {...props}>
      <Field name="requesting"component={ReduxField} type="hidden" />
      <Field name="textRecipient"component={ReduxField} type="hidden" />
      <Field name="textBody" component={ReduxField} type="textarea"/>
      <Box mt={[10, 15]} >
        <Button type="submit" onClick={handleSubmit} gradient='cherry' w={[1]} >Send Text (SMS) Message</Button>
      </Box>
    </FormWrapper>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

FormElements.defaultProps = {
  is: 'form',
}

export default FormElements
