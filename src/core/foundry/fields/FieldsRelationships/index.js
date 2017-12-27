/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete,
  Checkbox
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
    <Box w={1} {...props.fieldStyle}>
      <SelectDropdown
        name="metadataOrganizationCategory"
        component={AutoComplete}
        dataSourceConfig={{ text: 'name', value: 'id' }}
        dataSource={[
          { id: 0, name: 'Culture' },
          { id: 1, name: 'Economics' },
          { id: 2, name: 'Food' },
          { id: 3, name: 'Social Justice' },
          { id: 4, name: 'Other' }
        ]}
        floatingLabelText="Project Type"
        filter={MUIAutoComplete.fuzzyFilter}
        openOnFocus
        textFieldStyle={{height:'52.5px'}}
        fullWidth
    />
    </Box>
    <Box>
      <Field name="settingsPublished" component={Checkbox} label="Published" />
    </Box>
    <Box>
      <Field name="settingsPublished" component={Checkbox} label="Mushrooms" />
    </Box>
  </Flex>
)

FieldCollectionComponent.defaultProps = {
  fields: {}
}

export default FieldCollectionComponent
