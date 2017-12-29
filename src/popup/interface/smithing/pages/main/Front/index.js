/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { svg, images, screen} from 'assets'

/*-* Atoms *-*/
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Container from 'atoms/Container'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import SVG from 'atoms/SVG'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import List from 'atoms/List'
import Span from 'atoms/Span'
import Shape from 'atoms/Shape'
import Section from 'atoms/Section'
import HorizontalRule from 'atoms/HorizontalRule'
import Image from 'atoms/Image'
import BackgroundGradient from 'atoms/BackgroundGradient'
import BackgroundImage from 'atoms/BackgroundImage'

/*-* Foundry *-*/

import { IconCircle } from 'foundry'
import MacbookDisplay from 'components/sentient/MacbookDisplay'
import BrowserDisplay from 'components/sentient/BrowserDisplay'
import {BackgroundParticles} from 'fusion/background'

import { MiningInterface } from 'containers'
import Login from 'smithing/forms/authentication/AuthorizationLogin'

/*-* Sections *-*/
import FrontProjectSearch from 'smithing/sections/FrontProjectSearch'
import FrontOrganizationSearch from 'smithing/sections/FrontOrganizationSearch'
import FrontBasics from 'smithing/sections/FrontBasics'

import HTMLRender from 'smithing/editor/HTMLRender'
/* ------------------------------- Component -------------------------------- */
export default props => (<div>
<Shape top left right h={[ '70px', '90px', "125px"]} mt={[-70, -90, -125]} svg={svg.waves} />
<Shape top left right h={[ '70px', '90px', "125px"]} svg={svg.waves} w={[1]} transform={['rotate(180deg)']} z={0} />
<Section gradient='blue' color='white' pos='relative' py={[100,150]} >

  <BackgroundParticles/>

  <Container py={[20,50]} w={1320} >
    <Box textAlign='center'>
      <Heading level={[4]} f={[4]} color='white' fw='bold' textAlign='center' ts={['darkPurple']}>Faster, More Secure Deals. Stay in control of the process at all times.</Heading>
      <Heading
        level={[4]}
        f={[6,7]}
        color='white'
        fw='bold'
        textAlign='center'
        py={[30,60,80]}
        ts={['darkPurple']}>
        Automate Time<br/><Span fontWeight='300'>Sensitive Communications</Span> 
      </Heading>
      <HorizontalRule bi='colorBase' bs={1} gradient='lime' w={[0.33333, 40, 60]} />
      <Paragraph fontSize={[3]} fontWeight={[100]} ts={['darkHazy']}>
        Eliminate time wasted on the phone, checking in with people and tracking down the right information.
      </Paragraph>
    </Box>
  </Container>

  <MacbookDisplay>
    <Image src={screen.timechainDashboard}/>
  </MacbookDisplay>

  <Box textAlign='center' mt={[20,50]} >
    <HorizontalRule bi='colorWheel' w={[0.33333, 40, 60]} />
    <Paragraph f={[2]} color='grayLight' fw='300' textAlign='center' ts={['darkHazy']}>Build Distributed Applications</Paragraph>
    <Button gradient='cherry'><a href="https://github.com/EidenaiEth/eidenai">Github Code Repo</a></Button>
  </Box>

</Section>
<HTMLRender delta='front'/>

<FrontBasics/>
</div>)