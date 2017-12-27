/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  SelectField,
} from 'redux-form-material-ui'
import ChipInput from 'material-ui-chip-input'
import TaxonomyCategory from 'static/forms/TaxonomyCategory'
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
    valueDefault,
    ...props
   }) => (
  <Flex direction='column' wrap='wrap' {...props.styledWrapper}>
    <Field
      name="taxonomyCategory"
      component={AutoComplete}
      floatingLabelText="Taxonomy Category"
      filter={MUIAutoComplete.fuzzyFilter}
      dataSource={props.dataSource ? props.dataSource : TaxonomyCategory}
      maxSearchResults={6}
      openOnFocus
      fullWidth
    />
    <Field
        name="taxonomyTags"
        valueDefault={valueDefault || []}
        floatingLabelText="Taxonomy Tags"
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