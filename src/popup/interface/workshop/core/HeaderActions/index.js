/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Box} from 'particles'
import {BackgroundImage, BackgroundGradient, Container, Heading, Paragraph, Link, Section} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props => (<div>
  <Box pos='relative' display='inline-block' w={[1]} >
  { !props.background 
    ? null 
    : typeof props.background === 'object'
      ? props.background
      : <BackgroundImage image={props.background} opacity={[0.5]} />
  }
  <Container px={[20,40]} py={[20,40, 80]} color='white' textAlign='center' pos='relative' >
      <Heading fontSize={[3]} level={3} mb={0} ts={['darkPurple']} fontWeight="300" >{props.tagline}</Heading>
      <Heading fontSize={[5,6,7]} level={3} mb={10} ts={['darkPurple']} >{props.title}</Heading>
      {props.buttons}
  </Container>
  <Section py={[20]} color='white' textAlign='center' pos='relative'>
    <Container w={[1,1, 620]} >
      {props.actions}
    </Container>
    <BackgroundGradient gradient='blue' opacity={[0.4]} z={[2]} />
  </Section>
  
  </Box>
</div>)