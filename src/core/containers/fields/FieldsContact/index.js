/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import { Box, Flex } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'

// Normalize Input
import normalizePhone from 'logic/forms/normalize/phone'

/* ---------------------------- Module Package ------------------------------ */
export default props => (
  <Flex direction={['column', 'row']} wrap='wrap' {...props.styledWrapper} >
    <Box {...props.styledFieldOuter} >
      <Field name="contactEmail" placeholder="Email" component={ReduxField} type="email" {...props} {...props.styledField}/>
    </Box>
    <Box {...props.styledFieldOuter}>
      <Field name="contactPhone" placeholder="Phone" component={ReduxField} type="tel" normalize={normalizePhone} {...props} {...props.styledField}/>
    </Box>
  </Flex>
)

