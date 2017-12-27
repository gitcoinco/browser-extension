// import idx from './idx'
import React from 'react'
import TextField from 'material-ui/TextField'
import { BottomToolbar } from 'ory-editor-ui'
import Toggle from 'material-ui/Toggle'
import Absolute from 'atoms/Absolute'
import { svg } from 'assets'
import Box from 'atoms/Box'
import SVG from 'atoms/SVG'

const handleChange = (onChange, key) => (e, value) => onChange({ [key]: value })

export default props => !props.focused ? null :
<BottomToolbar open={props.focused}>
  <Box w={[1]} pr={10} pb={[15,25]} >
    <TextField
      hintText="3141592"
      floatingLabelText="Blocknumber"
      inputStyle={{ color: 'white' }}
      floatingLabelStyle={{ color: 'white' }}
      hintStyle={{ color: 'grey' }}
      value={props.state.blockNumber}
      onChange={handleChange(props.onChange, 'blockNumber')}
    />
    <Absolute top right color='white'> 
      <Toggle
        label="Design"
        style={{ width: '145px' }}
        labelStyle={{ color:'white' }}
        value={props.state.open}
        toggled={props.state.open}
        onToggle={handleChange(props.onChange, 'open')}
      />
    </Absolute>
  </Box>
</BottomToolbar>