/* ------------------------- External Dependencies -------------------------- */
// import idx from './idx'
import React from 'react'
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
  Padding
</Heading>
<HorizontalRule bi='colorWheel' bs={1} w={1} />
<TextField
  floatingLabelText="Padding"
  inputStyle={{ color: 'charcoal' }}
  floatingLabelStyle={{ color: 'charcoal' }}
  hintStyle={{ color: 'grey' }}
  value={props.state.p}
  onChange={handleChange(props.onChange, 'p')}
/>
<TextField
  floatingLabelText="Padding Vertical"
  inputStyle={{ color: 'charcoal' }}
  floatingLabelStyle={{ color: 'charcoal' }}
  hintStyle={{ color: 'grey' }}
  value={props.state.py}
  onChange={handleChange(props.onChange, 'py')}
/>
<TextField
  floatingLabelText="Padding Horizontal"
  inputStyle={{ color: 'charcoal' }}
  floatingLabelStyle={{ color: 'charcoal' }}
  hintStyle={{ color: 'grey' }}
  value={props.state.px}
  onChange={handleChange(props.onChange, 'px')}
/>

</Flex>