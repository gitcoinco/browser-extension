/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ---------------------------- Module Package ------------------------------ */
export default ({data, foundry, styled, ...props}) => !foundry ? null
: (typeof foundry === 'function')
    ? React.createElement(foundry, {...data, styled})
    : React.cloneElement(foundry, {...data, styled})