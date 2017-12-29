/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Flex, Box, Heading, Image, Paragraph, Container, Section } from 'atomic'

import ProviderNewInfura from 'containers/ethers/EthersProviderNewInfura'
import ProviderInitializeEtherscan from 'containers/ethers/EthersProviderInitializeEtherscan'
import BlockchainBlockNumber from 'containers/ethers/EthersBlockchainBlockNumber'
import BlockchainGasPrice from 'containers/ethers/EthersBlockchainGasPrice'
import BlockchainBlockGet from 'containers/ethers/EthersBlockchainBlockGet'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box>
  <Flex justify='space-evenly' >
    <Heading level={[3,5]} f={[3]} ta='center' mb={15} >
      Current Block Number: #<BlockchainBlockNumber/>
    </Heading>
    <Heading level={[3,5]} f={[3]} ta='center' mb={15} >
      Gas Price: <BlockchainGasPrice/>
    </Heading>
  </Flex>
  <BlockchainBlockGet />
  <Heading level={[3]} f={[3,4]} color='blue' >
    Provider Information
  </Heading>
  <ProviderNewInfura/>
  <ProviderInitializeEtherscan/>
</Box>