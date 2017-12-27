import styled from 'styled-components'
import {
  Flex as _Flex,
  Box as _Box,
  Grid as _Grid
} from 'grid-styled'
import {
  borderRadius,
  borderColor,
  borderImage,
  boxShadow,
  color,
  fontFamily,
  fontSize,
  height,
  minHeight,
  responsiveStyle
} from 'styled-system'

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
const display = [responsiveStyle('display')]
const textAlign = [responsiveStyle('textAlign'), responsiveStyle('textAlign', 'ta') ]
const opacity = [responsiveStyle('opacity', 'opacity'), responsiveStyle('opacity', 'o') ]
const position = [responsiveStyle('position', 'position'), responsiveStyle('position', 'pos') ]
const transform = [responsiveStyle('transform'), responsiveStyle('transform', 't') ]
const overflow = [responsiveStyle('overflow',), responsiveStyle('overflow', 'of') ]
const zIndex = [responsiveStyle('z-index', 'zIndex'), responsiveStyle('z-index', 'z') ]

export const Grid = styled(_Grid)([],
blurry,
...border,
boxShadow,
borderColor,
borderImage,
borderRadius,
color, 
display,
fontFamily,
fontSize, 
gradient,
height,
minHeight,
...textAlign,
...opacity,
...overflow,
...position,
...transform,
...zIndex
)
Grid.defaultProps = {
  z: 10
}
export const Flex = styled(_Flex)([], 
...border,
boxShadow,
borderColor,
borderImage,
borderRadius,
color, 
display,
fontFamily,
fontSize, 
gradient,
height,
minHeight,
...textAlign,
...opacity,
...overflow,
...position,
...transform,
...zIndex
)
Flex.defaultProps = {
  z: 10
}
export const Box = styled(_Box)([],
...border,
boxShadow,
borderColor,
borderImage,
borderRadius,
color, 
display,
fontFamily,
fontSize,
gradient,
height,
minHeight,
...textAlign,
...opacity,
...overflow,
...position,
...transform,
...zIndex
)
Box.defaultProps = {
  z: 10
}