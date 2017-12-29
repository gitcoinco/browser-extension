/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Route } from 'atomic'
/* ------------------------- Internal Dependencies -------------------------- */
import HTMLRender from 'foundry/editor/HTMLRender'
/* ------------------------------- Component -------------------------------- */
export default ({ ...props }) => 
<Route
exact
path="/content/:alias"
component={HTMLRender} 
delta='contents'
/>