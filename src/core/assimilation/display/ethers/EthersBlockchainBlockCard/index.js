/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import HorizontalRule from 'atoms/HorizontalRule'
import Absolute from 'atoms/Absolute'
import Container from 'atoms/Container'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import List from 'atoms/List'
/* ---------------------------- Module Package ------------------------------ */
export default props => !props.data ? null :
<Box bs={0} br={10} p={[15,25]} >
  <Heading level={[3]} f={[3]} color='blue' >
    Hash:  {idx(props, _=>_.data.hash)}
  </Heading>
  <HorizontalRule bi='colorWheel' bs={1} w={[1]} />
  <Box w={[1,1,0.5]}>
    <Paragraph f={[1]}>
      <strong>Number:</strong> {idx(props, _=>_.data.number)}
    </Paragraph>
    <Paragraph f={[1]}>
      <strong>Timestamp:</strong> {idx(props, _=>_.data.timestamp)}
    </Paragraph>
    <Paragraph f={[1]}>
      <strong>Miner:</strong> {idx(props, _=>_.data.miner)}
    </Paragraph>
    <Paragraph f={[1]}>
      <strong>Nonce:</strong> {idx(props, _=>_.data.nonce)}
    </Paragraph>
  </Box>
  <Box w={[1,1,0.5]}>
    <Paragraph f={[1]}>
      <strong>Parent Hash:</strong> {idx(props, _=>_.data.parentHash)}
    </Paragraph>
    <Paragraph f={[1]}>
      <strong>Extra Data:</strong> {idx(props, _=>_.data.extraData)}
    </Paragraph>
    <Paragraph f={[1]}>
      <strong>Gas Limit:</strong> {idx(props, _=>_.data.gasLimit)}
    </Paragraph>
    <Paragraph f={[1]}>
      <strong>Gas Used:</strong> {idx(props, _=>_.data.gasUsed)}
    </Paragraph>
  </Box>
  
  {
    !idx(props, _=>_.data.transactions) ? null :
    <Box h={[250, 400]} bs={0} br={10} p={[15,30]} >
      <Heading level={[2]} f={[3]} mb={10}>
        Transaction List
      </Heading>
      <PerfectScrollbar>
        <List children={props.data.transactions}/>
      </PerfectScrollbar>
    </Box>
  }
</Box>