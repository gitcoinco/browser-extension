/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { Box, Flex, ReduxField }from 'atomic'
import numberPrice from 'logic/forms/normalize/numberPrice'
/* ---------------------------- Module Package ------------------------------ */
export default props => (
  <Flex direction='column' wrap='wrap' {...props.styledWrapper}>
    <Flex {...props.styledFieldOuter} >
      <Field 
        name="priceDefault"
        placeholder="$ 0.00"
        label='Price'
        component={ReduxField}
        type="number"
        normalize={numberPrice}
        {...props}
      />
    </Flex>
    <Field
      name="priceCompare"
      label='Price Compare'
      placeholder="$ 0.00"
      component={ReduxField}
      normalize={numberPrice}
      type="number"
      {...props}
    />
  </Flex>
)