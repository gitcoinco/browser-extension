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

export default (props) => {
  const mission = idx(props, _ => _.biography.biographyMission)
  const objective = idx(props, _ => _.biography.biographyObjective)
  const summary = idx(props, _ => _.biography.biographySummary)
return <Flex direction={['column']} w={[1]} {...props} >
    <Box w={[1]} mt={[15,25]} bs={[0]} p={[10,15,25]}>
    { !mission?null:
    <Box>
      <Heading level={[3]} f={[4]}>Mission</Heading>
      <HorizontalRule bs={2} height={2} bi='blue' mx={0} w={[0.075]} />
      <Paragraph f={[1]}>{mission}</Paragraph>
    </Box>
    }
    { !objective?null:
    <Box>
      <Heading level={[3]} f={[4]}>Objective</Heading>
      <HorizontalRule bs={2} height={2} bi='blue' mx={0} w={[0.075]} />
      <Paragraph f={[1]}>{objective}</Paragraph>
    </Box>
    }
    { !summary?null:
    <Box>
      <Heading level={[3]} f={[4]}>Summary</Heading>
      <HorizontalRule bs={2} height={2} bi='blue' mx={0} w={[0.075]} />
      <Paragraph f={[1]}>{summary}</Paragraph>
    </Box>
    }
  </Box>
</Flex>
}