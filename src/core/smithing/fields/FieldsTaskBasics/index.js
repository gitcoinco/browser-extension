/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import { Flex, Box, ReduxField } from 'atomic'
/* ---------------------------- Module Package ------------------------------ */
export default props => (
  <Flex direction={['column']} justify="space-evenly" wrap='wrap' {...props.styledWrapper} >
    <Box {...props.styledFieldOuter}>
        <Field name="taskDescription" placeholder="Please describe the task." component={ReduxField} type="textarea" mt={[10]}  {...props.fields} />
    </Box>
  </Flex>
)