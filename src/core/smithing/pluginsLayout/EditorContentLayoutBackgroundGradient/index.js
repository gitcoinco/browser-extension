/* ------------------------- External Dependencies -------------------------- */
// import idx from './idx'
import React from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { BottomToolbar } from 'ory-editor-ui'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import HorizontalRule from 'atoms/HorizontalRule'
import { AutoComplete } from 'material-ui'

const handleChangeAutoComplete = (onChange, key) => (e, value) => {
  return onChange({ [key]: e.value || e })
}
const handleChange = (onChange, key) => (e, value) => {
  return onChange({ [key]: value })
}

export default (props) =>
<Flex direction={['column']} >
<Heading level={[3]} f={[3,4]}>
  Overlay
</Heading>
<HorizontalRule bi='colorWheel' bs={1} w={1} />
<AutoComplete
  component={AutoComplete}
  dataSource={[
    { value: 'blue', text: 'Blue' },
    { value: 'blueAqua', text: 'Blue Aqua' },
    { value: 'blueSky', text: 'Blue Sky' },
    { value: 'blueAlge', text: 'Blue Alge' },
    { value: 'cherry', text: 'Cherry' },
    { value: 'green', text: 'Green' },
    { value: 'greenDeep', text: 'Green Deep' },
    { value: 'greenLeaf', text: 'Green Leaf' },
    { value: 'greenLime', text: 'Green Lime' },
    { value: 'purple', text: 'Purple' },
    { value: 'purpleDeep', text: 'Purple Deep' },
    { value: 'purpleFade', text: 'Purple Fade' },
    { value: 'orange', text: 'Orange' },
  ]}
  floatingLabelText="Gradient"
  filter={AutoComplete.fuzzyFilter}
  openOnFocus
  textFieldStyle={{color: '#3e3e3e'}}
  listStyle={{color: '#3e3e3e'}}
  inputStyle={{color: '#3e3e3e'}}
  style={{color: '#3e3e3e !important'}}
  menuStyle={{color: '#3e3e3e', maxHeight: '220px' }}
  fullWidth
  onNewRequest={handleChangeAutoComplete(props.onChange, 'backgroundGradient')}
/>
<TextField
  hintText="0-1"
  floatingLabelText="Gradient Opacity"
  inputStyle={{ color: '#3e3e3e' }}
  floatingLabelStyle={{ color: '#3e3e3e' }}
  hintStyle={{ color: 'grey' }}
  value={props.state.backgroundGradientOpacity}
  onChange={handleChange(props.onChange, 'backgroundGradientOpacity')}
/>
</Flex>