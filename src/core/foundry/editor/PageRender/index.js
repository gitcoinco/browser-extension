/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { HTMLRenderer } from 'ory-editor-renderer'
/* ------------------------- Internal Dependencies -------------------------- */
import Loading from 'atoms/Loading'
import EditorPlugins from 'foundry/editor/EditorPlugins'
/* ------------------------------- Component -------------------------------- */
export default props => !props.content
? <Loading gradient='cherry' />
: <HTMLRenderer state={props.content} plugins={EditorPlugins} />