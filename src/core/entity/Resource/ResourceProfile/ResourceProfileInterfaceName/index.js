/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import idx from 'idx'
import { Absolute} from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
/* ------------------------------- Component -------------------------------- */
const imageLayout = {
  align: 'center',
  justify: 'center',
  direction: ['column'],
  br: ['0 10px 10px 0'],
  gradient:'purple',
  py:[10],
  textAlign: 'center',
  w:[0.03],
}

const mainLayout = {
  bg:'white',
  pl:[10],
  p:[7.5],
  w:[0.97],
}

export default (props) => {
  const name = idx(props, _ => _.name.nameResource)
  const nameAlias = idx(props, _ => _.name.nameResourceAlias)

return 
  <Box {...mainLayout}>
    <Heading f={[4]} level={3} display='inline-block' children={name|| null} />
    <Heading f={[2]} level={3} color='charcoal' ml={[5]} display='inline-block'>Alias: {nameAlias}</Heading>
  </Box>
}