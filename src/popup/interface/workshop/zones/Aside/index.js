/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import Flex from 'atoms/Flex'
/* ------------------------- Internal Dependencies -------------------------- */
import AsideDrawerMenu from 'smithing/layout/AsideDrawerMenu'
/* ------------------------------- Component -------------------------------- */
export default props => 
<div>
  <Flex direction='column' w={[1]} >
    <AsideDrawerMenu owner="aside" />
  </Flex>
</div>
