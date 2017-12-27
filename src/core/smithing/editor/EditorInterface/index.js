/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui'
/* ------------------------- Internal Dependencies -------------------------- */
import Loading from 'atoms/Loading'
import EditorWrapper from 'foundry/editor/EditorWrapper'

/* ------------------------------- Component -------------------------------- */
export default props => !props ? <Loading gradient='cherry' /> :
<div>
  <Trash editor={EditorWrapper}/>
  <DisplayModeToggle editor={EditorWrapper}/>
  <Toolbar editor={EditorWrapper}/>
</div>