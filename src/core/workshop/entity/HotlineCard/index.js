/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import idx from './idx';

/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute} from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, List, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
import { HotlineItem, HotlineDirectory } from 'logic/interface/DataScaffold'
/* ------------------------------- Component -------------------------------- */
const mainLayout = {
  bg:'white',
  bs:'2',
  br: 5,
  p: 10,
  of:'hidden'
}

export default (props) => {
  /*--- Extraction ---*/
  const id = idx(props, _ => _.id)
  const dateStart = idx(props, _ => _.date.dateStart)
  const dateEnd = idx(props, _ => _.date.dateEnd)

  const data = HotlineItem(props)

  /*--- Component ---*/
  return <Flex 
      direction={['column']}
      p={[10]}
      {...mainLayout}
      {...props}
      key={id} 
      >
      <Heading level={[3]} f={[4,5]} color='indigo' >
        {data.name}
      </Heading>
      <Paragraph f={3}>
        Hotline Assigned: <Span color='green'>{data.hotline}</Span>
      </Paragraph>
      <HorizontalRule bs={0} />
      <Flex>
        <Box w={[1,1,0.5]} >
          <Heading level={[3]} f={[3]} color='indigo' >
            Calendar Schedule
          </Heading>
          <Paragraph f={[1]}>
            <strong>Start:</strong> {data.dateStart}
          </Paragraph>
          <Paragraph f={[1]}>
            <strong>End:</strong> {data.dateEnd}
          </Paragraph>

          <Paragraph f={[1]}>
            <strong>Hour Start:</strong> {data.hourStart}
          </Paragraph>
          <Paragraph f={[1]}>
            <strong>Hour End:</strong> {data.hourEnd}
          </Paragraph>
      </Box>
        <Box w={[1,1,0.5]} >
          <Heading level={[3]} f={[3]} color='indigo' >
            Days Active
          </Heading>
          <List children={data.days} ordered m={0} />
        </Box>
    </Flex>
    </Flex>
}