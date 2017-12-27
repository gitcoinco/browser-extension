import React from 'react'
import { svg } from 'assets'
import Toggle from 'material-ui/Toggle'
import SVG from 'atoms/SVG'
import { 
  Flex, Box, Absolute, Section,
  BackgroundImage, BackgroundGradient,
} from 'atomic'

const handleChange = (onChange, key) => (e, value) => onChange({ [key]: value })

export default props =>
<Section
  bg={props.state.background}
  color={props.state.color}
  w={Number(props.state.w)}
  p={Number(props.state.p)}
  py={Number(props.state.py)}
  px={Number(props.state.px)}
  m={Number(props.state.m)}
  my={Number(props.state.my)}
  mx={Number(props.state.mx)}
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
        label="Section Layout"
        style={{ width: '175px' }}
        labelStyle={{ color:'white' }}
        onToggle={handleChange(props.onChange, 'open')}
      />
    </Absolute>
  }

  {props.children}
</Section>