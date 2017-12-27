/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'


/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionPersonBiography = props => (
  <FieldCollectionWrapper direction={['column']}  wrap='wrap' {...props} w={1} >
    <Box w={1} mt={[15]}>
      <Field name="biographyMission" placeholder="Mission: Why is the project important for the community?" component={ReduxField} type="textarea" mt={[10]}  {...props.fields} />
    </Box>
    <Box w={1} mt={[15]}>
      <Field name="biographyObjective" placeholder="Objective: What is the project going to accomplish for the community?" component={ReduxField} type="textarea" mt={[10]} {...props.fields} />
    </Box>
    <Box w={1} mt={[15]}>
      <Field name="biographySummary" placeholder="Summary: Write an easy to understand introduction for the community" component={ReduxField} mt={[10]} type="textarea" {...props.fields} />
    </Box>
  </FieldCollectionWrapper>
)

FieldCollectionPersonBiography.defaultProps = {
  fields: {}
}

export default FieldCollectionPersonBiography
