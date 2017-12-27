/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box } from 'particles'
import {Heading, SVG} from 'atomic'
/* ------------------------------- Component -------------------------------- */
const TemplateNotifications = props => (
<Box pl={[10]} py={[15]} >
  <Flex direction='row' align='center' justify='center'>
    <Flex direction='row' align='center' justify='center' px={[10]} >
      <SVG svg={assets.svg.bell} svgColor='white' w={[20]} height={[20]} />
      <Heading f={[3]} level={[5]} fontWeight="300" display='inline-block' ml={[5]}>0</Heading>
    </Flex>
    <Flex direction='row' align='center' justify='center' px={[10]} >
      <SVG svg={assets.svg.donate} svgColor='white' w={[20]} height={[20]} />
      <Heading f={[3]} level={[5]} fontWeight="300" display='inline-block' ml={[5]}>2</Heading>
    </Flex>
    <Flex direction='row' align='center' justify='center'px={[10]} >
      <SVG svg={assets.svg.chatDrawn} svgColor='white' w={[20]} height={[20]} />
      <Heading f={[3]} level={[5]} fontWeight="300" display='inline-block' ml={[5]}>6</Heading>
    </Flex>
  </Flex>
</Box>
)

TemplateNotifications.defaultProps = {
}


export default TemplateNotifications