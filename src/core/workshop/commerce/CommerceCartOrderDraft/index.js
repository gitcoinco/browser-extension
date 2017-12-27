/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import Box from 'atoms/Box'
import SVG from 'atoms/SVG'
import Heading from 'atoms/Heading'
import Button from 'atoms/Button'
import CommerceOrderCreate from 'containers/commerce/CommerceOrderCreate'
/* ------------------------------- Component -------------------------------- */
export default props =><Box bg='grayLight' p={20} bs={0} >
  <Box w={1} >
    <CommerceOrderCreate><Button w={1} gradient='cherry'>
      <SVG svg={assets.svg.commerceBag} svgColor='white' height={50} w={50} ml={[null,null, -50]} /><br/>
      <Heading level={[3]} f={[3,5]} fw={300} >
        Create New Order
      </Heading>
    </Button></CommerceOrderCreate>
  </Box>
</Box>
