/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import styled from 'styled-components'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
import EthersContractMethods from '../EthersContractMethods'
 const Scroll = styled(Flex)`
  overflow-x: hidden;
 `
/* ---------------------------- Module Package ------------------------------ */
export default props => !props.data ? null :
<Box bs={2} br={10} p={[15,25]} {...props.styled} >
  <Heading level={[3]} f={[3]} color='blue' ta='center' >
    Ethereum Name System ABI
  </Heading>
  <Paragraph fw='300' ta='center'><strong>network:</strong> {idx(props, _=>_.data.provider.name)}</Paragraph>
  <Paragraph fw='300' ta='center' > {idx(props, _=>_.data.address)}</Paragraph>
  <HorizontalRule bi='colorWheel' />
  {props.transactions}
  <Scroll h={260} direction='column' >
    {
      props.data.interface.abi.map(ethInterface => <EthersContractMethods {...ethInterface} /> )
    }
  </Scroll>
</Box>
