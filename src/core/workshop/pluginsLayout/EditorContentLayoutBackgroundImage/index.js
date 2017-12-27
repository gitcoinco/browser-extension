// import idx from './idx'
import React from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { BottomToolbar } from 'ory-editor-ui'
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import HorizontalRule from 'atoms/HorizontalRule'
import { AutoComplete } from 'material-ui'

const handleChange = (onChange, key) => (e, value) => {
  return onChange({ [key]: value })
}

const handleChangeAutoComplete = (onChange, key) => (e, value) => {
  return onChange({ [key]: e.value || e })
}
export default (props) =>
<Flex direction={['column']} >
<Heading level={[3]} f={[3,4]}>
  Image
</Heading>
<HorizontalRule bi='colorWheel' bs={1} w={1} />
<TextField
  hintText="http://example.com/image.png"
  floatingLabelText="Image (URL)"
  inputStyle={{ color: '#3e3e3e' }}
  floatingLabelStyle={{ color: '#3e3e3e' }}
  hintStyle={{ color: 'grey' }}
  value={props.state.backgroundImage}
  onChange={handleChange(props.onChange, 'backgroundImage')}
/>
<TextField
  hintText="0-1"
  floatingLabelText="Image Opacity"
  inputStyle={{ color: '#3e3e3e' }}
  floatingLabelStyle={{ color: '#3e3e3e' }}
  hintStyle={{ color: 'grey' }}
  value={props.state.backgroundImageOpacity}
  onChange={handleChange(props.onChange, 'backgroundImageOpacity')}
/>
</Flex>