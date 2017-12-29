/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import HorizontalRule from 'atoms/HorizontalRule'
import Absolute from 'atoms/Absolute'
import Container from 'atoms/Container'
import Box from 'atoms/Box'
import Flex from 'atoms/Flex'
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import List from 'atoms/List'
/* ---------------------------- Module Package ------------------------------ */
export default props => !props.data ? null :
<Box bs={0} br={10} p={[15,25]} >
  <Flex>
    <Box w={[1,1,0.7]} >
      <Heading level={[3]} f={[3]} color='blue' >
        <strong>Private Key:</strong> {idx(props, _=>_.data.privateKey)}
      </Heading>
    </Box>
    <Box w={[1,1,0.3]} >
      <Button onClick={()=>props.ethersWalletCreateRandomRequest()}>
        Randomly Generate New Wallet
      </Button>
    </Box>
  </Flex>
  <HorizontalRule bi='colorWheel' bs={1} w={[1]} />
  <Box>
    <Paragraph f={[1]}>
      <strong>Default Gas Limit:</strong> {idx(props, _=>_.data.defaultGasLimit)}
    </Paragraph>
    <Paragraph f={[1]}>
      <strong>Address:</strong> {idx(props, _=>_.data.address)}
    </Paragraph>
    <Paragraph f={[1]}>
      <strong>Mnemonic:</strong> {idx(props, _=>_.data.mnemonic)}
    </Paragraph>
  </Box>
</Box>