/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import Editor, { Editable, createEmptyState } from 'ory-editor-core'
/* ------------------------- Internal Dependencies -------------------------- */
import slate from 'ory-editor-plugins-slate'
import spacer from 'ory-editor-plugins-spacer'
import image from 'ory-editor-plugins-image'
import parallax from 'ory-editor-plugins-parallax-background'
import divider from 'ory-editor-plugins-divider'
import native from 'ory-editor-plugins-default-native'
import EditorPluginSection from 'foundry/plugins/EditorPluginSection'
import EditorPluginContainer from 'foundry/plugins/EditorPluginContainer'
import EditorPluginFlex from 'foundry/plugins/EditorPluginFlex'
/* ------------------------ Initialize Dependencies ------------------------- */
const plugins = {
  content: [
    slate(), 
    spacer,image, divider,
  ],
  layout: [
    parallax({ defaultPlugin: slate() }),
    EditorPluginFlex({ defaultPlugin: slate() }),
    EditorPluginContainer({ defaultPlugin: slate() }),
    EditorPluginSection({ defaultPlugin: slate() }),
  ],
  native
}
/* ------------------------------- Component -------------------------------- */
const content = createEmptyState()
export default new Editor({
  plugins,
  editables: [
    content
  ],
})
