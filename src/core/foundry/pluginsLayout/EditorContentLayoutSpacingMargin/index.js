/* ------------------------- External Dependencies -------------------------- */
// import idx from './idx'
import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import HorizontalRule from 'atoms/HorizontalRule'
const handleChange = (onChange, key) => (e) => {
  const target = e.target
  if (target instanceof HTMLInputElement) {
    onChange({ [key]: target.value })
  }
}

export default (props) =>
<Flex direction={['column']} >
<Heading level={[3]} f={[3,4]}>
  Margin
</Heading>
<HorizontalRule bi='colorWheel' bs={1} w={1} />
<TextField
  floatingLabelText="Margin"
  inputStyle={{ color: 'charcoal' }}
  floatingLabelStyle={{ color: 'charcoal' }}
  hintStyle={{ color: 'grey' }}
  value={props.state.m}
  onChange={handleChange(props.onChange, 'm')}
/>
<TextField
  floatingLabelText="Margin Vertical"
  inputStyle={{ color: 'charcoal' }}
  floatingLabelStyle={{ color: 'charcoal' }}
  hintStyle={{ color: 'grey' }}
  value={props.state.my}
  onChange={handleChange(props.onChange, 'my')}
/>
<TextField
  floatingLabelText="Margin Horizontal"
  inputStyle={{ color: 'charcoal' }}
  floatingLabelStyle={{ color: 'charcoal' }}
  hintStyle={{ color: 'grey' }}
  value={props.state.mx}
  onChange={handleChange(props.onChange, 'mx')}
/>
</Flex>