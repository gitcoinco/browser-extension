/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import Route from 'molecules/Route'
/* ------------------------- Internal Dependencies -------------------------- */
import EditorPage from 'foundry/editor/EditorPage'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Route
  exact
  path="/editor/:alias"
  component={EditorPage} 
  delta='newPage'
/>