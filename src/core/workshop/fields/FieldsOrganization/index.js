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


const RenderChip = ({input, hintText, floatingLabelText, dataSource, dataSourceConfig, valueDefault}) => {
  return <ChipInput
    {...input}
    value = { input.value || valueDefault}
    onRequestAdd={(addedChip) => {
      let values = input.value || [];
      values = values.slice();
      values.push(addedChip);
      input.onChange(values);
    }}
    onRequestDelete={(deletedChip) => {
      let values = input.value || [];
      if(!values) return 
      values = values.filter(v => v !== deletedChip);
      input.onChange(values);
    }}
    onBlur={() => input.onBlur()}
    hintText={hintText}
    floatingLabelText={floatingLabelText}
    dataSource={dataSource}
    dataSourceConfig={dataSourceConfig}
    fullWidth
    />
}

/* ---------------------------- Module Package ------------------------------ */
export default ({ 
    handleSubmit, isSubmitting,
    valueDefault, contributors,
    styled, ...props
   }) => (
  <Flex direction='column' wrap='wrap' {...props.styledWrapper}>
    <Flex {...props.styledFieldOuter} >
      <Field
            name="organizationColltion"
            component={SelectField}
            floatingLabelText="Collection"
            fullWidth
          >
            <MenuItem value="collection1" primaryText="Collection Example 1" />
            <MenuItem value="collection2" primaryText="Collection Example 2" />
            <MenuItem value="collection3" primaryText="Collection Example 3" />
          </Field>
    </Flex>
    <Field
        name="organizationTags"
        valueDefault={valueDefault || []}
        floatingLabelText="Tags"
        component={RenderChip}
        filter={MUIAutoComplete.fuzzyFilter}
        openOnFocus
        fullWidth
        styledField={{
          w: 1
        }}
      />
  </Flex>
)