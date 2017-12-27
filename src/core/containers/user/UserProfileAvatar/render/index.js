/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box, Image, Button, Link, SVG, Span } from 'atomic'
/* --------------------------- Styled Components ---------------------------- */
import AuthorizationLogin from 'containers/authentication/AuthorizationLogin'
/* ------------------------------- Component -------------------------------- */
const UserProfile = (props) => !props.user 
?
<AuthorizationLogin gradient='turqoise' children='Login/Register' providerSelection='google' />
:
<Image src={props.user.photoURL} height={[37.5]} w={[37.5]} br={0.5} bs={[2]} b={['2px solid transparent']} bc={['white']} />
  

/* ---------------------------- Export Package ------------------------------ */
export default UserProfile