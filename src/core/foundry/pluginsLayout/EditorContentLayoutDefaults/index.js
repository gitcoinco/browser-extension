/* ------------------------- External Dependencies -------------------------- */
// import idx from './idx'
import React from 'react'
import TextField from 'material-ui/TextField'
import { BottomToolbar } from 'ory-editor-ui'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import HorizontalRule from 'atoms/HorizontalRule'
import Heading from 'atoms/Heading'
import { AutoComplete } from 'material-ui'

const handleChangeAutoComplete = (onChange, key) => (e, value) => {
  return onChange({ [key]: e.value || e })
}
const handleChange = (onChange, key) => (e) => {
  const target = e.target
  if (target instanceof HTMLInputElement) {
    onChange({ [key]: target.value })
  }
}

export default (props) =>
<Flex direction={['column']} >
<Heading level={[3]} f={[3,4]}>
  Background/Color
</Heading>
<HorizontalRule bi='colorWheel' bs={1} w={1} />
<AutoComplete
  component={AutoComplete}
  dataSource={[
    { value: 'blue', text: 'Blue' },
    { value: 'charcoal', text: 'Charcoal' },
    { value: 'green', text: 'Green' },
    { value: 'purple', text: 'Purple' },
    { value: 'orange', text: 'Orange' },
    { value: 'red', text: 'Red' },
  ]}
  floatingLabelText="Background"
  filter={AutoComplete.fuzzyFilter}
  openOnFocus
  textFieldStyle={{color: '#3e3e3e'}}
  listStyle={{color: '#3e3e3e'}}
  inputStyle={{color: '#3e3e3e'}}
  style={{color: '#3e3e3e !important'}}
  menuStyle={{color: '#3e3e3e', maxHeight: '220px' }}
  fullWidth
  onNewRequest={handleChangeAutoComplete(props.onChange, 'background')}
/>
<AutoComplete
  component={AutoComplete}
  dataSource={[
    { value: 'blue', text: 'Blue' },
    { value: 'charcoal', text: 'Charcoal' },
    { value: 'green', text: 'Green' },
    { value: 'purple', text: 'Purple' },
    { value: 'orange', text: 'Orange' },
    { value: 'red', text: 'Red' },
  ]}
  floatingLabelText="Color"
  filter={AutoComplete.fuzzyFilter}
  openOnFocus
  textFieldStyle={{color: '#3e3e3e'}}
  listStyle={{color: '#3e3e3e'}}
  inputStyle={{color: '#3e3e3e'}}
  style={{color: '#3e3e3e !important'}}
  menuStyle={{color: '#3e3e3e', maxHeight: '220px' }}
  fullWidth
  onNewRequest={handleChangeAutoComplete(props.onChange, 'color')}
/>
</Flex>