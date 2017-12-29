/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import Foundry from 'foundry'
/* ---------------------------- Module Package ------------------------------ */
export default ({data, foundry, styled, ...props}) => !foundry 
? null
: !Foundry[foundry]
  ? null
  : React.createElement(Foundry[foundry], {...props, data, ...styled}) 
