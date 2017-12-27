/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { officeMeeting } from 'assets/images'

/*-* Atoms *-*/
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import Link from 'atoms/Link'
import Span from 'atoms/Span'
import Section from 'atoms/Section'
import HorizontalRule from 'atoms/HorizontalRule'
import BackgroundImage from 'atoms/BackgroundImage'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Section {...props} px={[20,40]} pt={[20, 40]} pb={[120]} color='white' textAlign='center' pos='relative' >
  <BackgroundImage image={officeMeeting} z={0} o={[0.235]} />
  <Flex direction={['column']}  mh={['50vh', '70vh']}justify={['center']} >
    
    <Box w={1} color="white" >
      <Heading fontSize={[5,6,7]} level={3} fontWeight={[300]} mb={10}>
        Sync Your World's<br/><Span fw={[700]}>Communications</Span>
      </Heading>
      <HorizontalRule bi='linear-gradient(to right,#54a0c4,#42c68f)' w={[0.1333]} />
      <br/>
      <Paragraph fontSize={[3,4]} fontWeight={[100]} mb={[10]}>
        Manage <strong>Real Estate</strong> deals better, faster and more securely.
      </Paragraph>
    </Box> 

    <Box>
      <Paragraph fontSize={[2,3]} fontWeight={[100]} ts={[0]} mt={[10,30, 60]} ><strong>Create Free Account</strong> - Start Today </Paragraph>

    </Box>
  </Flex>
</Section>
