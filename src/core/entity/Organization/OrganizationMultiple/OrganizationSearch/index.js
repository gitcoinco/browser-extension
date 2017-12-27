/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Box, Flex, Heading, HorizontalRule
} from 'atomic'
import {
  FormOrganizationSearch
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[10]} >
  <Heading level={[3]} f={[3]}>Organization Search</Heading>
  <HorizontalRule bi='colorWheel' bs={1} w={[1]} />
  <FormOrganizationSearch
    collection={props.collection}
    entity={props.entity}
  />
</Box>