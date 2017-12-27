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
      <Field
        name="biographyMission"
        label="Mission"
        placeholder="Mission: Who is being helped?"
        component={ReduxField}
        type="textarea"
        mt={[10]}
        {...props.fields} />
    </Box>
    <Box w={1} mt={[15]}>
      <Field
        name="biographyObjective"
        label="Objective"
        placeholder="Objective: What is being accomplished?"
        component={ReduxField}
        type="textarea"
        mt={[10]}
        {...props.fields} />
    </Box>
    <Box w={1} mt={[15]}>
      <Field
        name="biographySummary"
        component={ReduxField}
        type="textarea"
        label="Summary"
        placeholder="Summary: Explain like I'm 5"
        mt={[10]}
        {...props.fields} />
    </Box>
  </FieldCollectionWrapper>
)

FieldCollectionPersonBiography.defaultProps = {
  fields: {}
}

export default FieldCollectionPersonBiography
