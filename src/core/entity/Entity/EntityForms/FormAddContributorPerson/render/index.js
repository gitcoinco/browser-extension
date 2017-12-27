/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle
} from 'redux-form-material-ui'

import ChipInput from 'material-ui-chip-input'

/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'
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
      values = values.filter(v => v.eid !== deletedChip);
      input.onChange(values);
    }}
    onBlur={() => input.onBlur()}
    hintText={hintText}
    floatingLabelText={floatingLabelText}
    dataSource={dataSource}
    dataSourceConfig={dataSourceConfig}
    />
}
/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ data, handleSubmit, isSubmitting, styled, valueDefault}, props) => {
  if(!data) return null
  const AutoCompleteList = data.map(v=>({eid:idx(v.data, _=> _.uid), nameDisplay: idx(v.data, _=> _.name.nameDisplay)} ))
  return(<Block {...styled}>
    <Box>
      <Field
        name="contributorPeople"
        valueDefault={valueDefault || []}
        floatingLabelText="Add People Contributors"
        dataSource={AutoCompleteList}
        component={RenderChip}
        dataSourceConfig={{ text: 'nameDisplay', value: 'eid' }}
        filter={MUIAutoComplete.fuzzyFilter}
        openOnFocus
      />
    </Box>
    <Box mt={10} >
      <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
    </Box>
  </Block>)
}