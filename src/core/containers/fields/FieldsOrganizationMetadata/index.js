/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete
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
          { id: 0, name: 'Non-Profit' },
          { id: 1, name: 'Government' },
          { id: 2, name: 'Corporation' },
          { id: 3, name: 'Coalition' },
          { id: 4, name: 'Other' }
        ]}
        floatingLabelText="Type"
        filter={MUIAutoComplete.fuzzyFilter}
        openOnFocus
        textFieldStyle={{height:'52.5px'}}
        fullWidth
    />
    </Box>
    <Box flex='1 1 auto' {...props.fieldStyle}>
      <SelectDropdown
        name="metadataOrganizationObjective"
        component={AutoComplete}
        dataSourceConfig={{ text: 'name', value: 'id' }}
        dataSource={[
          { id: 0, name: 'Organization' },
          { id: 1, name: 'Commerce' },
          { id: 2, name: 'Political' },
          { id: 3, name: 'Opportunity' },
          { id: 4, name: 'Stranger Danger' }
        ]}
        floatingLabelText="Objective"
        textFieldStyle={{height:'52.5px'}}
        filter={MUIAutoComplete.fuzzyFilter}
        openOnFocus
        fullWidth
    />
    </Box>
  </Flex>
)

FieldCollectionComponent.defaultProps = {
  fields: {}
}

export default FieldCollectionComponent
