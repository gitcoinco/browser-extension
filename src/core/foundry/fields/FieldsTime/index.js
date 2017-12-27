/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box,Button, Heading, Paragraph, ReduxField } from 'atomic'
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle,
  DatePicker,
  TimePicker
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import { NameFieldCollection, ContactFieldCollection, AddressFieldCollection, FieldRelationshipsPerson, FieldCollectionPersonBiography } from 'containers/fields'
import normalizePhone from 'logic/forms/normalize/phone'

/* ---------------------------- Module Package ------------------------------ */
export default props => (
  <Flex direction={['column', 'row']} wrap='wrap' {...props.styledWrapper} >
    <Box w={[1,1,0.5]} {...props.styledFieldOuter} >
     <Field name="timeStart" component={TimePicker} format={null} hintText="Time Start" fillWidth />
    </Box>
    <Box w={[1,1,0.5]} {...props.styledFieldOuter}>
      <Field name="timeEnd" component={TimePicker} format={null} hintText="Time End" fillWidth />
    </Box>
  </Flex>
)

