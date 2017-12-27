import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
/*-* Atoms *-*/
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import SVG from 'atoms/SVG'
import Button from 'atoms/Button'
import Paragraph from 'atoms/Paragraph'
import Heading from 'atoms/Heading'
/*-* Containers *-*/
import FirestoreListFilter from 'containers/firestore/FirestoreListFilter'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box bg='grayLight' p={20} bs={0} >
  <Flex align='center' >
     <Flex
      align='center' 
      color='blue'
      justify='right'
      w={[1,1,0.5]}
      >
      <SVG svg={assets.svg.commerceCart} svgColor='blue' bs={1}  height={40} w={40}/>
      <Heading level={[3]} f={[4,5]} color='blue' ml={[10,10, 15]} >
        Cart Total
      </Heading>
    </Flex>
    <Flex
      align='center' 
      color='blue'
      justify='right'
      w={[1,1,0.5]}
      >
      <FirestoreListFilter
        delta={`CommerceComposeCartItems`}
        foundry='CommerceCartPrice'
        f={[4,5]}
        ta='right'
        w={1}
      />
    </Flex>
  </Flex>
</Box>
