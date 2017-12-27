/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box } from 'atomic'
import {
  DatePicker,
  TimePicker
} from 'redux-form-material-ui'
/* ---------------------------- Module Package ------------------------------ */
export default props => (
  <Flex direction={['column', 'row']} wrap='wrap' {...props.styledWrapper} >
    <Box  w={[1,1,0.5]} >
      <Field name="dateStart" component={DatePicker} format={null} hintText="Date Start" fillWidth />
    </Box>
    <Box  w={[1,1,0.5]} >
      <Field name="dateEnd" component={DatePicker} format={null} hintText="Date End" fillWidth />
    </Box>
  </Flex>
)

