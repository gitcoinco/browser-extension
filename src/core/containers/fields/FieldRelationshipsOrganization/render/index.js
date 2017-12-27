/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import FieldComponent from 'molecules/Field'
import ReduxField from 'organisms/ReduxField'
/* --------------------------- Styled Components ---------------------------- */
const FieldCollection = styled.div`

`

/* ---------------------------- Module Package ------------------------------ */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting } = props
  return (
    <FieldCollection>
      <Field name="_csrf" type="hidden" component="input"/>
      <Heading>Organizational Relationships</Heading>
      <Field name="relationshipsOrganizations" label="Organizations" component={ReduxField} type="text" />
    </FieldCollection>
  )
}

FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
