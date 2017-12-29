/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import humanize from 'humanize'
import { DateTime } from 'luxon'
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import sampleData from 'static/data/bounties.dev.json'
import { icons, graphics } from 'assets'
import Container from 'atoms/Container'
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
  word-wrap: wrap;
`

export default props => !props.data ? null :
<Container mt={50} w={[0.6]} >

  <Flex align='center' justify='center' direction='column' ta='center' w={[1]} >
    <Box 
      align='center'
      justify='center'
      display='inline-block'
      mr={5}
      p={5}
      bg='white' borderRadius={9999999}
    >
    <Image src={props.data.avatar_url} borderRadius={9999999} w={[100]} />
    </Box>
    <Box>
      <Heading color={'white'} level={3} margin={'0'} display='inline-block' f={[4]} fontWeight={'700'}>
        {idx(props.data, _=>_.title)}
      </Heading>
      <Heading color={'white'} level={2} margin={'0'} fontSize={[5]} fontWeight={'100'}>
        <strong>{Math.round(100.0 * props.data.value_in_token /10**18) / 100}<Span f={2} > ETH</Span></strong>
      </Heading>
    </Box>
  

    <Box ta='left' >
      <Paragraph f={[1]} color={'purpleMuted'} >
        {idx(props.data, _=>_.issue_description_text)}
      </Paragraph>
    </Box>
    <Heading color={'white'} level={4} mt={10} fontSize={[2,3]} fontWeight={'100'}>
      Experience Level: <strong>{idx(props.data, _=>_.experience_level)}</strong>
    </Heading>
    {
      !(idx(props.data, _=>_.metadata.issueKeywords)) ? null : Array(props.data.metadata.issueKeywords).map(tag=><Span color='purpleMuted' f={1} >{tag}</Span>)
    }
    </Flex>

  <Flex direction='column' ta='center' w={[1]} mt={30} >
    <Link to="/"><SVG svg={icons.uiArrowLeft} svgColor='pink' ml={5} width={55} /></Link>
    <Span color='white'>Back</Span>
  </Flex>
</Container>
