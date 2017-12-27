import React from 'react'
import { Flex, Box, Heading, SVG } from 'atomic'
import assets from 'assets'

import EthersBlockchainBlockGet from 'assimilation/fetching/ethers/EthersBlockchainBlockGet'
export default props => !props.state ? null :
<Box
  bg={props.state.background}
  color={props.state.color}
  w={Number(props.state.w)}
  p={Number(props.state.p)}
  py={Number(props.state.py)}
  px={Number(props.state.px)}
  m={Number(props.state.m)}
  my={Number(props.state.my)}
  mx={Number(props.state.mx)}
  w={Number(props.state.w)}
>
  {
  props.readOnly ? null :
  <Flex align='center' >
    <SVG svg={assets.svg.ethereum} svgColor='blue' w={60} />
    <Heading level={[3]} f={[3]}>
      Ethereum Block #{ props.state.blockNumber }
    </Heading>
  </Flex>
  }
  <EthersBlockchainBlockGet blockNumber={Number(props.state.blockNumber)} />
</Box>