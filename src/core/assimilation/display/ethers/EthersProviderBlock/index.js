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
    Hash: {props.hash}
  </Heading>
  <HorizontalRule bi='colorWheel' bs={1} w={[1]} />
  <Paragraph f={[1]}>
    <strong>Number:</strong> {idx(props, _=>_.data.number)}
  </Paragraph>
  <Paragraph f={[1]}>
    <strong>Timestamp:</strong> {idx(props, _=>_.data.timestamp)}
  </Paragraph>
</Box>