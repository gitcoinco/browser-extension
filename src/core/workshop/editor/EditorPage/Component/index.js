/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Editable, createEmptyState } from 'ory-editor-core'
/* ------------------------- Internal Dependencies -------------------------- */
import Loading from 'atoms/Loading'
import { Fixed } from 'particles'
import { Flex, Box, Button } from 'atomic'

import EditorWrapper from 'foundry/editor/EditorWrapper'
import '../elements.css'
import 'ory-editor-ui/lib/index.css'
import 'ory-editor-plugins-slate/lib/index.css'
import 'ory-editor-plugins-html5-video/lib/index.css'
import 'ory-editor-plugins-image/lib/index.css'
import 'ory-editor-plugins-parallax-background/lib/index.css'
import 'ory-editor-plugins-slate/lib/index.css'
import 'ory-editor-plugins-spacer/lib/index.css'
import 'ory-editor-plugins-video/lib/index.css'
export default props => !props.editableId ? <Loading gradient='cherry' /> :
<div>
<Fixed right bottom mr={105} mb={35} z={100} >
  <Button onClick={()=>props.contentSaveUpdate(n=>!n)} gradient='blue' >Save Page</Button>
</Fixed>
<Editable
editor={EditorWrapper} 
id={props.editableId}
onChange={(editable) => {
    {/*props.databaseWriteRequest(editable)*/}
    props.contentStorageUpdate(s=>editable)
  }}
/>
</div>
