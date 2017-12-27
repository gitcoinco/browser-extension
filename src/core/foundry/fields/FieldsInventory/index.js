/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box, Flex } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'

/* ---------------------------- Module Package ------------------------------ */
export default props => (
  <Flex direction='column' wrap='wrap' {...props.styledWrapper}>
    <Flex {...props.styledFieldOuter} >
      <Field 
        name="inventorySKU"
        label='SKU (Stock Keeping Unit)'
        component={ReduxField}
        type="text"
        color='blue'
        mh={50}
        f={[4]}
        fw='700'
        {...props}
      />
    </Flex>
    <Field
      name="inventoryBarcode"
      label='Barcode (ISBN, UPC, GTIN, etc.)'
      component={ReduxField}
      type="text"
      color='gray' 
      f={[1]}
      {...props}
    />
  </Flex>
)