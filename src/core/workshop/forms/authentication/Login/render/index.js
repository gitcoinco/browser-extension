/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import ReduxField from 'organisms/ReduxField'

const FormWrapper = styled.form`
  display: block;
  padding: 20px;
`
const FormElements = (props) => {
  const { handleSubmit } = props
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit}>
      <Field name="email" placeholder="Email" component={ReduxField} type="email" />
      <Field name="password" label="Password" component={ReduxField} type="password" />
      <div>
        <Button type="submit">Login</Button>
      </div>
    </FormWrapper>
  )
}

FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
