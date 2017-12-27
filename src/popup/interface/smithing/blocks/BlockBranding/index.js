/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import Image from 'atoms/Image'
import Span from 'atoms/Span'
import UserProfileAvatar from 'containers/user/UserProfileAvatar'
import DrawerOpen from 'containers/drawer/DrawerOpen'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex
  direction={['row']} align={"stretch"} justify="center" wrap='wrap'
  bg={['blue']} gradient={['purpleBlue']} gradientDir='45deg' 
  bs={[0]} 
  color={['white']}
  pos='relative'
>
  <Flex align="center" justify="left" w={[0.5]} pl={[15]} py={[7]} direction={['row']} >
    <Link to="/"><Heading color={'white'} level={4} margin={'0'} fontSize={[3,4]} fontWeight={'100'}>5 Messages</Heading></Link>
  </Flex>
  
  <Flex align="center" justify='flex-end' 
  pr={10} py={[10]} w={[0.50]}>
    <DrawerOpen><Heading f={[2]} level={[4]}><a>Dashboard</a></Heading></DrawerOpen>
    <Span mx={5}>|</Span>
    <UserProfileAvatar/>
  </Flex>
</Flex>
