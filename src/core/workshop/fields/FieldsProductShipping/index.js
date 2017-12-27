/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  Checkbox,
  DatePicker,
  TimePicker,
  SelectField,
} from 'redux-form-material-ui'
import ChipInput from 'material-ui-chip-input'
/* ------------------------- Internal Dependencies -------------------------- */
import { Box, Flex, ReduxField } from 'atomic'


/* ---------------------------- Module Package ------------------------------ */
export default ({ 
    handleSubmit, isSubmitting,
    valueDefault, contributors,
    styled, ...props
   }) => (
<Flex direction='column' wrap='wrap' {...props.styledWrapper}>
  <Flex align='center' >
    <Flex {...props.styledFieldOuter} w={[1,0.5]} >
      <Field 
        name="shippingWeight"
        placeholder="0.0"
        label="Product Weight"
        component={ReduxField}
        type="text"
        color='blue'
        mh={50}
        f={[4]}
        fw='700'
        {...props}
      />
    </Flex>
    <Flex {...props.styledFieldOuter} w={[1,0.5]} pl={15} >
      <Field
        name="shippingWeightType"
        component={SelectField}
        fullWidth
      >
        <MenuItem value="shippingWeightTypePound" primaryText="lb" />
        <MenuItem value="shippingWeightTypeOunce" primaryText="oz" />
        <MenuItem value="shippingWeightTypeKilogram" primaryText="kg" />
        <MenuItem value="shippingWeightTypeGram" primaryText="g" />
      </Field>
    </Flex>
  </Flex>
  <Flex {...props.styledFieldOuter} >
    <Field
      name="shippingFulfillment"
      component={SelectField}
      floatingLabelText="Fulfilment Service"
      fullWidth
    >
      <MenuItem value="shippingFulfillmentManual" primaryText="Manual" />
      <MenuItem value="shippingFulfillmentAutomated" primaryText="Automated" />
    </Field>
  </Flex>

</Flex>
)