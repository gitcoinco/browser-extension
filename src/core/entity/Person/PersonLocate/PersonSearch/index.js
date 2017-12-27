/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Box, Flex, Heading, HorizontalRule
} from 'atomic'
import {
  FormPersonSearch
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[10]} >
  <Heading level={[3]} f={[3]}>Person Search</Heading>
  <HorizontalRule bi='colorWheel' bs={1} w={[1]} />
  <FormPersonSearch
    collection={props.collection}
    entity={props.entity}
  />
</Box>