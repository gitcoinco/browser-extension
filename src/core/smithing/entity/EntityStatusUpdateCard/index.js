/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import idx from './idx';

/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute} from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

/* ------------------------------- Component -------------------------------- */
const mainLayout = {
  flex:['2 1 0'],
  bg:'white',
  bs:'1',
  br: 5,
  p: 20,
  of:'hidden'
}

export default (props) => {
  /*--- Extraction ---*/
  const{ data, styled } = props
  /*--- Extraction ---*/
  const id = idx(props, _ => _.id)
  const contentBody = idx(props, _ => _.content.contentBody)
  if (!props.id) return null
  /*--- Component ---*/
  return <Flex direction={['row']} align='stretch' justify='center' p={[10]} {...props} key={id} >
      <Box>
          { !contentBody?null:<Paragraph f={[3]} level={4} fw={[300]}>{contentBody}</Paragraph>}
      </Box>
    </Flex>
}