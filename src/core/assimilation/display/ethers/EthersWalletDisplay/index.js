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
// privateKey(pin): "0x46c288501ecb91af5639bf2489249f39fa8e5e1ecddbb79aae24b3b4a0fafe75"
// defaultGasLimit(pin): 1500000
// address(pin): "0x6a5aDAba5165FB18D928d2a3cc23c013D9ffc800"
// mnemonic(pin): "behind text thought zebra avocado maple ice provide scheme jaguar label spoon"
// path(pin): "m/44'/60'/0'/0/0"
/* ---------------------------- Module Package ------------------------------ */
export default props => !props.data ? null :
<Box bs={0} br={10} p={[15,25]} >
  <Heading level={[3]} f={[3,4]} color='blue' >
    <strong>Private Key:</strong> {idx(props, _=>_.data.privateKey)}
  </Heading>
  <HorizontalRule bi='colorWheel' bs={1} w={[1]} />
  <Box>
      <Heading level={[3]} f={[3]} color='blue' >
        <strong>Private Key:</strong> {idx(props, _=>_.data.privateKey)}
      </Heading>
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