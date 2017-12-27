/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle
} from 'redux-form-material-ui'


/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionPersonBiography = props => (
  <FieldCollectionWrapper direction={['column']}  wrap='wrap' {...props} w={1} >
    <Box w={1} mt={[15]}>
      <Field name="biographyOverview" placeholder="Biography" component={ReduxField} type="textarea" {...props.fields}{...props}/>
    </Box>
    <Field
      name="referral"
      component={AutoComplete}
      floatingLabelText="Skills"
      openOnFocus
      fullWidth
      filter={MUIAutoComplete.fuzzyFilter}
      dataSourceConfig={{ text: 'name', value: 'id' }}
      dataSource={[
        { id: 0, name: 'Construction' },
        { id: 2, name: 'Technology' },
        { id: 3, name: 'Communication' },
        { id: 4, name: 'Other' }
      ]}
    />
    <Field name="biographyMission" placeholder="Mission" component={ReduxField} type="textarea" mt={[10]}  {...props.fields} {...props}/>
    <Field name="biographySkills" placeholder="Skills" component={ReduxField} type="text" mt={[10]} {...props.fields} {...props}/>
    <Field name="biographyOccupation" placeholder="Occupation" component={ReduxField} type="text" {...props.fields} {...props}/>
  </FieldCollectionWrapper>
)

FieldCollectionPersonBiography.defaultProps = {
  fields: {}
}

export default FieldCollectionPersonBiography
