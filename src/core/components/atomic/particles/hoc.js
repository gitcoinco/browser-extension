import React from 'react'
import { compose } from 'recompose'
import styled from 'styled-components'
import {
  active,
  focus,
  disabled,
  space,
  boxShadow,
  borderColor,
  borderImage,
  borderRadius,
  borderWidth,
  color,
  hover,
  fontFamily,
  fontSize,
  height,
  minHeight,
  textShadow,
  responsiveStyle,
  width,
} from 'styled-system'
import {
  arrayOf,
  oneOfType,
  number,
  string
} from 'prop-types'
import tag from './tag'

const prop = oneOfType([
  number,
  string,
  arrayOf(oneOfType([
    number,
    string
  ]))
])

const propTypes = {
  width: prop,
  w: prop,
  fontSize: prop,
  f: prop,
  fw: prop,
  color: prop,
  bg: prop,
  m: prop,
  mh: prop,
  mt: prop,
  mr: prop,
  mb: prop,
  ml: prop,
  mx: prop,
  my: prop,
  p: prop,
  pt: prop,
  pr: prop,
  pb: prop,
  pl: prop,
  px: prop,
  py: prop,
  textShadow: prop,
  ts: prop,
  textAlign: prop,
  svg: prop,
  z: prop,
  zIndex: prop,
}

const withStyle = (style, props) => Component => {
  
const gradient = props => 
props.gradient
? props.radial
  ? 
    `
    background: #EB3349;  /* fallback for old browsers */
    background: -webkit-radial-gradient(${props.gradientDir ? props.gradientDir : 'circle at center'},${props.theme.gradient[props.gradient]});  /* Chrome 10-25, Safari 5.1-6 */
    background: radial-gradient(${props.gradientDir ? props.gradientDir : 'circle at center'}, ${props.theme.gradient[props.gradient]}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    `
  :
    `
    background-image: -webkit-linear-gradient(${props.gradientDir ? props.gradientDir : '0deg'}, ${props.theme.gradient[props.gradient]});
    background-image: linear-gradient(${props.gradientDir ? props.gradientDir : '0deg'}, ${props.theme.gradient[props.gradient]});
    `
: null

const blurry = responsiveStyle('filter', 'blur')
const border = [responsiveStyle('border',), responsiveStyle('border', 'b') ]
const display = [responsiveStyle('display'), responsiveStyle('display', 'dis') ]
const height = [responsiveStyle('height'), responsiveStyle('height', 'height') ]
const minHight = [responsiveStyle('minHeight'), responsiveStyle('minHeight', 'mh') ]
const filter = [responsiveStyle('filter'), responsiveStyle('filter', 'fil') ]
const fontWeight = [responsiveStyle('fontWeight'), responsiveStyle('fontWeight', 'fw')]
const opacity = [responsiveStyle('opacity', 'opacity'), responsiveStyle('opacity', 'o') ]
const overflow = [responsiveStyle('overflow',), responsiveStyle('overflow', 'of') ]
const position = [responsiveStyle('position', 'position'), responsiveStyle('position', 'pos') ]
const textAlign = [responsiveStyle('textAlign'), responsiveStyle('textAlign', 'ta') ]
const transform = [responsiveStyle('transform'), responsiveStyle('transform', 't') ]
const zIndex = [responsiveStyle('z-index', 'zIndex'), responsiveStyle('z-index', 'z') ]

// Flex
const align = responsiveStyle('align-items', 'align')
const flex = responsiveStyle('flex')
const direction = responsiveStyle('flex-direction', 'direction')
const justify = responsiveStyle('justify-content', 'justify')
const order = responsiveStyle('order')
const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap')

const Base = styled(Component)([],
  active,
  align,
  blurry,
  ...border,
  boxShadow,
  borderColor,
  borderImage,
  borderRadius,
  borderWidth,
  color,
  direction,
  disabled,
  ...display,
  flex,
  ...filter,
  gradient,
  focus,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  hover,
  justify,
  minHeight,
  ...position,
  order,
  ...opacity,
  ...overflow,
  textAlign,
  textShadow,
  ...transform,
  space,
  width,
  wrap,
  ...zIndex
)

Base.propTypes = propTypes

const Comp = styled(Base)
  .attrs(props)([], style)

return Comp
}

const hoc = (style, props) => compose(
  withStyle(style, props),
  tag
)

export default hoc
