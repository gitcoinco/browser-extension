/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Box, Flex } from 'atomic'
import {
  FormEntityAddFull
} from 'entity'

/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[20,40]}>
  <FormEntityAddFull
    bg='white'
    p={[10]}
    collection={props.collection}
  />
</Box>