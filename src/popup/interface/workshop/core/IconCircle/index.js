/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex,Paragraph, SVG} from 'atomic'
/* ------------------------------- Component -------------------------------- */
const IconCircle = props => {
const width = props.iconWidth ? props.iconWidth : 50
const height = 
  props.iconHeight 
    ? props.iconHeight 
    : props.iconWidth
      ? props.iconWidth
      : 50
return (<Flex {...props}>
  <Flex align='center' justify='center' bs={[1]} bg='whiteOpaque' borderRadius={0.5}  p={12} >
    <SVG svg={props.svg} height={height} w={width} {...props.iconStyled} />
  </Flex>
  <Paragraph f={[0]} color='blueLight' mt={[10]} >{props.title}</Paragraph>
</Flex>)
}

IconCircle.defaultProps = {
  align: 'center',
  direction: 'column',
  justify: 'center'
}

export default IconCircle