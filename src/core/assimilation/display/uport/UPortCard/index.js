/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import HorizontalRule from 'atoms/HorizontalRule'
import Absolute from 'atoms/Absolute'
import Container from 'atoms/Container'
import Box from 'atoms/Box'
import Flex from 'atoms/Flex'
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import List from 'atoms/List'
import Image from 'atoms/Image'
/* ---------------------------- Module Package ------------------------------ */
export default props => !props.data ? null : 
<Box {...props.styledCard}>
  <Flex
    align='center'
    direction={['column', 'column', 'row']}
  >
  <Box py={20} >
    <Image 
      src={idx(props, _=>_.data.avatar.uri)}
      bc="white"
      br={9999999}
      bs={2}
      w={[45,55,90]}
    />
  </Box>
    <Box pl={[null,null,25]} >
      <Paragraph f={[2,3]}>
        <strong>Name:</strong> {idx(props, _=>_.data.name)}
      </Paragraph>
    </Box>
  </Flex>

  <HorizontalRule bi='colorWheel' bs={1} w={[1]} />

  <Box>
  <Paragraph f={[1]}>
    <strong>Public Key:</strong> {idx(props, _=>_.data.publicKey)}
  </Paragraph>
  <Paragraph f={[1]}>
    <strong>Public Encryption Key:</strong> {idx(props, _=>_.data.publicEncKey)}
  </Paragraph>
  <Paragraph f={[1]}>
    <strong>0x Address:</strong> {idx(props, _=>_.data.address)}
  </Paragraph>
  </Box>
</Box>
