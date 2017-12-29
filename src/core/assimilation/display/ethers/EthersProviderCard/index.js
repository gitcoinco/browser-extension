/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
/* ------------------------- Internal Dependencies -------------------------- */
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import HorizontalRule from 'atoms/HorizontalRule'
/* ---------------------------- Module Package ------------------------------ */
export default props => !props.data ? null :
<Box bs={0} br={10} p={[15,25]} >
  <Heading level={[3]} f={[4,5]} color='blue' >
    Provider: {props.providerName}
  </Heading>
  <HorizontalRule bi='colorWheel' bs={1} w={[1]} />
  <Paragraph f={[1]}>
    <strong>Network:</strong> {idx(props, _=>_.data.name)}
  </Paragraph>
  <Paragraph f={[1]}>
    <strong>ENS Address:</strong> {idx(props, _=>_.data.ensAddress)}
  </Paragraph>
  <Paragraph f={[1]}>
    <strong>Chain ID:</strong> {idx(props, _=>_.data.chainId)}
  </Paragraph>
  <Paragraph f={[1]}>
    <strong>Test:</strong> {idx(props, _=>_.data.testnet) ? 'True' : 'False' }
  </Paragraph>
  <Paragraph f={[1]}>
    <strong>URL:</strong> { idx(props, _=> _.data.url) || idx(props, _=> _.data.baseUrl) }
  </Paragraph>
</Box>