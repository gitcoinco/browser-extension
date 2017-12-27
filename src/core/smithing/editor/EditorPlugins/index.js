// Editor Plugins
import slate from 'ory-editor-plugins-slate'
import spacer from 'ory-editor-plugins-spacer'
import image from 'ory-editor-plugins-image'
import video from 'ory-editor-plugins-video'
import parallax from 'ory-editor-plugins-parallax-background'
import html5video from 'ory-editor-plugins-html5-video'
import divider from 'ory-editor-plugins-divider'
import native from 'ory-editor-plugins-default-native'
// Editor Plugins
import EditorPluginEthereumBlock from 'foundry/plugins/EditorPluginEthereumBlock'
import EditorPluginSection from 'foundry/plugins/EditorPluginSection'
import EditorPluginContainer from 'foundry/plugins/EditorPluginContainer'
import EditorPluginFlex from 'foundry/plugins/EditorPluginFlex'

// Dether
import EditorPluginDetherAddSellPoint from 'foundry/plugins/EditorPluginDetherAddSellPoint'
import EditorPluginDetherDeleteSellPoint from 'foundry/plugins/EditorPluginDetherDeleteSellPoint'
import EditorPluginDetherGetAllTellers from 'foundry/plugins/EditorPluginDetherGetAllTellers'
import EditorPluginDetherGetTeller from 'foundry/plugins/EditorPluginDetherGetTeller'
import EditorPluginDetherGetTellerBalance from 'foundry/plugins/EditorPluginDetherGetTellerBalance'
import EditorPluginDetherGetTellersInZone from 'foundry/plugins/EditorPluginDetherGetTellersInZone'
import EditorPluginDetherSendToBuyer from 'foundry/plugins/EditorPluginDetherSendToBuyer'

// uPort
import EditorPluginIdentityLogin from 'foundry/plugins/EditorPluginIdentityLogin'
/* ------------------------ Initialize Dependencies ------------------------- */
export default {
  content: [
    slate(), 
    EditorPluginEthereumBlock,
    EditorPluginDetherAddSellPoint,
    EditorPluginDetherGetAllTellers,
    EditorPluginDetherGetTellerBalance,
    EditorPluginDetherGetTellersInZone,
    EditorPluginDetherSendToBuyer,
    EditorPluginIdentityLogin,
    spacer,image, video, divider, html5video,
  ],
  defaultPlugin: 'eidenai/content/section',
  layout: [
    parallax({ defaultPlugin: slate() }),
    EditorPluginFlex({ defaultPlugin: slate() }),
    EditorPluginContainer({ defaultPlugin: slate() }),
    EditorPluginSection({ defaultPlugin: slate() }),
  ],
  native
}