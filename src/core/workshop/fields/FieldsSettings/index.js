/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete,
  Checkbox,
  Toggle
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box, ReduxField } from 'atomic'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'

const SelectDropdown = styled(Field)`
  height: fit-content;

  label {
    top: 20px !important;
  }
  input {
    margin-top: 0 !important;
  }
`

/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionComponent = props => (
  <Flex direction={['column']} justify="space-evenly" {...props} >
    <Box>
      <Field name="settingsPublished" component={Toggle} label="Published" />
    </Box>
    <Box>
      <Field name="settingsActive" component={Toggle} label="Active" />
    </Box>
    <Box>
      <Field name="settingsFundraising" component={Toggle} label="Fundraising" />
    </Box>
  </Flex>
)

FieldCollectionComponent.defaultProps = {
  fields: {}
}

export default FieldCollectionComponent
