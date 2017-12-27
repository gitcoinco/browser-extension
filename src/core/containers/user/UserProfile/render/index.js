/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box, Image, Button, Link, SVG, Span } from 'atomic'
/* --------------------------- Styled Components ---------------------------- */
import AuthorizationLogin from 'containers/authentication/AuthorizationLogin'
/* ------------------------------- Component -------------------------------- */
const UserProfile = props => !props.user 
?
<Flex 
  align="center"
  justify={[ 'center', 'center', 'flex-end']}
  color='white'
  pr={[null, null, 15]}
  py={[5, 5, 'inherit']}
  w={[1]}>
  <Box px={10}>
    <AuthorizationLogin gradient='cherry' children='Login/Register' providerSelection='google' />
  </Box>
</Flex>
:
<Flex {...props} direction={['row']} justify='left' wrap='wrap' w={[1]} >
  <Box w={1} >
    <Span f={1} >{ props.user.displayName}</Span>
  </Box>
  <Box w={1} >
    <Image src={props.user.photoURL} height={[37.5]} w={[37.5]} borderRadius={0.5} bs={[2]} b={['2px solid transparent']} bc={['white']} />
  </Box>
  <Box flex={['1 1 0', '2 1 auto']}  >
    { props.logoutButton ? <Button onClick={props.logout} f={[0]} small >Logout</Button> : null }
  </Box>
</Flex>
  

/* ---------------------------- Export Package ------------------------------ */
export default UserProfile