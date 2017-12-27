/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Box, Flex, Heading, HorizontalRule
} from 'atomic'
import {
  FormDealSearch
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[10]} >
  <Heading level={[3]} f={[3]}>Deal Search</Heading>
  <HorizontalRule bi='colorWheel' w={[1]} />
  <FormDealSearch
    collection={props.collection}
    entity={props.entity}
  />
</Box>