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
export default (props) => {
  const id = idx(props, _ => _.id)
  const name = idx(props, _ => _.name.nameDisplay)
  const description = idx(props, _ => _.task.taskDescription)
  
  if (!id) return null
  
  return <Flex direction={['column']} p={[10]} {...props} key={id} >
      <Box>
          { !name ? null:
            <Heading level={[3]} f={[3]}>
              {name}
            </Heading>
          }
          { !description ? null:
          <Paragraph f={[3]} level={4} fw={[300]}>{description}</Paragraph>}
      </Box>
    </Flex>
}