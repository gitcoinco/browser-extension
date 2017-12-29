/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { icons } from 'assets'
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import Image from 'atoms/Image'
import Span from 'atoms/Span'
import SVG from 'atoms/SVG'
import DrawerOpen from 'containers/drawer/DrawerOpen'
import UPortCredentialsRequest from 'assimilation/fetching/uport/UPortCredentialsRequest'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex
  direction={['row']} align={"stretch"} justify="center" wrap='wrap'
  bg={['blue']} gradient={'blue'} gradientDir='182deg' 
  bs={[0]} 
  color={['white']}
  pos='relative'
>
  <Flex align="center" justify="left" w={[0.25]} pl={[15]} py={[7]} direction={['row']} >
    <Link to="/"><Heading color={'white'} level={4} margin={'0'} fontSize={[3,4]} fontWeight={'100'}>Gitcoin</Heading></Link>
  </Flex>
  <Flex align="center" justify="left" w={[0.25]} pl={[15]} py={[7]} direction={['row']} >
    <UPortCredentialsRequest/>
  </Flex>
  
  <Flex
    align="center" justify='flex-end' 
    pr={10} py={[10]} w={[0.50]}
  >
    <DrawerOpen>
      <Heading f={[2]} level={[4]} mb={0} mr={10}><a>MENU</a></Heading>
    </DrawerOpen>
    <DrawerOpen>
      <a><SVG svg={icons.uiListDetail} svgColor='white' mr={10} width={20}/></a>
    </DrawerOpen>
  </Flex>
</Flex>
