/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'


/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionComponent = props => (
  <FieldCollectionWrapper direction={['column', 'row']} justify="space-evenly" {...props} >
    <Box flex='2 1 auto' {...props.fieldStyle}>
      <Field name="nameResource" placeholder="Resource Name" component={ReduxField} type="text" height={35} {...props.fields} />
    </Box>
    <Box flex='3 1 auto' {...props.fieldStyle}>
      <Field name="nameResourceAlias" placeholder="Alias" component={ReduxField} type="text" height={35} {...props.fields} />
    </Box>
  </FieldCollectionWrapper>
)

FieldCollectionComponent.defaultProps = {
  fields: {}
}

export default FieldCollectionComponent
