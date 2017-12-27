/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { Box, Flex, ReduxField }from 'atomic'
import normalizePhone from 'logic/forms/normalize/phone'
/* ---------------------------- Module Package ------------------------------ */
export default props => (
  <Flex direction={['column', 'row']} wrap='wrap' {...props.styledWrapper} >
    <Field name="contactEmail" placeholder="Email" component={ReduxField} type="email" {...props} {...props.styledField}/>
    <Field name="contactPhone" placeholder="Phone" component={ReduxField} type="tel" normalize={normalizePhone} {...props} {...props.styledField}/>
  </Flex>
)