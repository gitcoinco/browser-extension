/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { icons, graphics } from 'assets'
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import Paragraph from 'atoms/Paragraph'
import Image from 'atoms/Image'
import Span from 'atoms/Span'
import SVG from 'atoms/SVG'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex direction={['row']} align={"stretch"} justify="center" wrap='wrap'>
  <Flex align="left" justify="left" w={[0.35]} pl={[15]} py={[7]} direction={['column']} >
    
    <Link to="/"><Image src={graphics.iconGitcoin} display='inline-block' mr={5} w={[20,27]} /><Heading color={'white'} level={4} margin={'0'} display='inline-block' fontSize={[4,5]} fontWeight={'100'}>Gitcoin</Heading></Link>
    <Link to="/"><Heading color={'white'} level={4} margin={'0'} fontSize={[2,3]} fontWeight={'100'}>Total Bounties: 15</Heading></Link>
    <Paragraph f={[1]}color={'white'} >
      Sollicitudin a sit amet erat. Praesent porta dui semper, volutpat diam sit amet, sagittis elit.
    </Paragraph>
  </Flex>
  <Flex align="center" justify="center" w={[0.20]} pl={[15]} py={[7]} direction={'column'} >
    <Heading color={'white'} level={2} margin={'0'} fontSize={[5]} fontWeight={'100'}><strong>25 <Span f={2} >ETH</Span></strong></Heading>
    <Heading color={'white'} level={4} margin={'0'} fontSize={[3,4]} fontWeight={'100'}>12 Hours Ago</Heading>
    <Heading color={'white'} level={4} margin={'0'} fontSize={[1,2]} fontWeight={'100'}>December 27, 2017</Heading>
  </Flex>
  <Flex align="center" justify="center" w={[0.0]} pl={[15]} py={[7]} direction={['row']} >
  </Flex>
  <Flex align="center" justify="space-evenly" w={[0.35]} pl={[15]} py={[7]} direction={['row']} wrap='wrap' >
    <Button gradient='pink' w={0.45} borderRadius={35}>Claim</Button>
    <Button gradient='turqoise' w={0.45} borderRadius={35} >Share</Button>
    <Heading color={'white'} level={4} margin={'0'} fontSize={[4]} fontWeight={'100'}>importance: <strong>8/10</strong></Heading>
  </Flex>
  <Flex align="center" justify="center" w={[0.05]} py={[7]} direction={['column']}>
    <SVG svg={icons.uiHeart} svgColor='white' width={20}/>
    <SVG svg={icons.uiChat} svgColor='white' width={20} />
    <SVG svg={icons.uiHelp} svgColor='white' width={20}/>
  </Flex>
  

</Flex>
