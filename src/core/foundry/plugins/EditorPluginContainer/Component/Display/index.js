import React from 'react'
import { svg } from 'assets'
import Toggle from 'material-ui/Toggle'
import SVG from 'atoms/SVG'
import Container from 'atoms/Container'
import { 
  Flex, Box, Absolute, Section,
  BackgroundImage, BackgroundGradient,
} from 'atomic'

const handleChange = (onChange, key) => (e, value) => onChange({ [key]: value })


export default props =>
<Container
  pos='relative'
> 
  {
    !props.state.backgroundImage ? null :
    <BackgroundImage
      src={props.state.backgroundImage}
      o={props.state.backgroundImageOpacity || 1}
    />
  }
  {
    !props.state.backgroundGradient ? null :
    <BackgroundGradient
      gradient={props.state.backgroundGradient}
      o={Number(props.state.backgroundGradientOpacity) || 1}
    />
  }

  {
    props.readOnly ? null :
    <Absolute top right color='white' mr={20} > 
      <Toggle
        label="Container Layout"
        style={{ width: '175px' }}
        labelStyle={{ color:'white' }}
        onToggle={handleChange(props.onChange, 'open')}
      />
    </Absolute>
  }

  {props.children}
</Container>