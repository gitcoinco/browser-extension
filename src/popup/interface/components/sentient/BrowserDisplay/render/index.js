/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { devices } from 'assets'
import Absolute from 'atoms/Absolute'
import Box from 'atoms/Box'
import Image from 'atoms/Image'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box>
  <Image src={devices.browser} />
  <Absolute gradient='secondary' mb={['0.1%']} ml={[0]} mr={[0]} mt={['9.14%']} z={[20]} of='hidden' >
    {props.children}
  </Absolute>
</Box>