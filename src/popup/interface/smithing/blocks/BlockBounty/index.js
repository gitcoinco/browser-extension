/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import humanize from 'humanize'
import { DateTime } from 'luxon'
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import sampleData from 'static/data/bounties.dev.json'
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
const DescriptionSnippet = styled(Box)`
  max-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: wrap;
`

export default props =>
<Flex direction={['row']} align={"stretch"} justify="center" wrap='wrap' mb={30} >
  <Flex align="center" direction={'column'} justify="center" ta='center' pl={[15]} py={[7]} w={[0.20]} >
    <Box 
      align='center'
      justify='center'
      display='inline-block'
      height={40}
      mr={5}
      width={40}
      p={5}
      bg='white' borderRadius={9999999}
    >
    <Image src={props.avatar_url} borderRadius={9999999} w={[30]} />
    </Box>
    <Heading color={'white'} level={2} margin={'0'} fontSize={[5]} fontWeight={'100'}>
      <strong>{Math.round(100.0 * props.value_in_token /10**18) / 100}<Span f={2} > ETH</Span></strong>
    </Heading>
    <Heading color={'purpleMuted'} level={4} margin={'0'} fontSize={[2]} fontWeight={'100'}>
      {DateTime.fromISO(props.created_on).toLocaleString({ month: 'long', day: 'numeric', year:'numeric' })}
    </Heading>
  </Flex>
  <Flex align="center" justify="center" w={[0.05]} py={[7]} direction={['column']}>
    <SVG svg={icons.uiHeart} svgColor='white' width={20}/>
    <SVG svg={icons.uiChat} svgColor='white' width={20} />
    <SVG svg={icons.uiHelp} svgColor='white' width={20}/>
  </Flex>
  <Flex align="left" justify="left" w={[0.45]} pl={[15]} py={[7]} direction={['column']} of='hidden' >
    <Heading color={'white'} level={3} margin={'0'} display='inline-block' f={[3]} fontWeight={'700'}>
      {idx(props, _=>_.title)}
    </Heading>
    <DescriptionSnippet>
      <Paragraph f={[1]} color={'purpleMuted'} >
          {idx(props, _=>_.issue_description_text)}
        </Paragraph>
    </DescriptionSnippet>
    <Heading color={'white'} level={4} mt={10} fontSize={[2,3]} fontWeight={'100'}>
      Experience Level: <strong>{idx(props, _=>_.experience_level)}</strong>
    </Heading>
    {
      !(idx(props, _=>_.metadata.issueKeywords)) ? null : Array(props.metadata.issueKeywords).map(tag=><Span color='purpleMuted' f={1} >{tag}</Span>)
    }
  </Flex>
  
  <Flex align="center" justify="center" w={[0.0]} pl={[15]} py={[7]} direction={['row']} >
  </Flex>
  <Flex align="center" justify="space-evenly" w={[0.25]} pl={[15]} py={[7]} direction={['row']} wrap='wrap' >
    <Heading color={'white'} level={4} color={'purpleMuted'} margin={'0'} fontSize={[3]} fontWeight={'100'}>importance: <strong>8/10</strong></Heading>
    <Button gradient='pink' w={0.45} borderRadius={35}>Claim</Button>
    <Button gradient='turqoise' w={0.45} borderRadius={35} >Share</Button>
    <Flex justify='space-evenly' width={1}>
      <Heading color={'white'} level={4} margin={'0'} fontSize={[3]} fontWeight={'100'}>Votes: <strong>33</strong></Heading>
      <Flex direction='row' justify='space-evenly' align='center' >
        <SVG svg={icons.uiArrowUp} svgColor='white' width={15} />
        <SVG svg={icons.uiArrowDown} svgColor='white' ml={5} width={15} />
      </Flex>
    </Flex>
  </Flex>
  
</Flex>
