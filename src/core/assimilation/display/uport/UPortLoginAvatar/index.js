/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import Button from 'atoms/Button'
import Absolute from 'atoms/Absolute'
import Container from 'atoms/Container'
import Box from 'atoms/Box'
import Flex from 'atoms/Flex'
import Heading from 'atoms/Heading'
import List from 'atoms/List'
import Image from 'atoms/Image'
/* ---------------------------- Module Package ------------------------------ */
export default props => props.status
? !props.data.avatar ? null :
<Flex align='center' >
  {console.log(props)}
  <Image 
    src={idx(props, _=>_.data.avatar.uri)}
    bc="white"
    borderRadius={9999999}
    bs={2}
    height={35}
    mr={10}
  />
  <Heading level={[3]} f={[3]}>
    {idx(props, _=>_.data.name)}
  </Heading>
</Flex>
: !props.uPortGetCredentialsRequest 
  ? 
  <div>Login Disabled</div>
  :
  <Button 
    w={1}
    py={15}
    onClick={()=>props.uPortGetCredentialsRequest()} 
    {...props.styledButton} >
    Login With uPort
  </Button>
