/* ------------------------- External Dependencies -------------------------- */
import React from 'react'

import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute }from 'atomic'
import {
  EntityProfileEntryDefaults,
} from 'foundry'
import { 
  EntityProfileMenu,
  EntityProfileInterfaceIdentity
} from 'entity'
import { fromTheme } from 'store/departments/selectors'
/* ------------------------------- Component -------------------------------- */
const absoluteLeft = {
  bottom: true,
  top: true,
  left: true,
  bg:'white',
  pos:['relative !important', 'relative !important', 'absolute !important'],
  h:[1],
  w:[1,1, 0.77],
}
const absoluteRight = {
  top: true,
  right: true,
  gradient:'gray',
  pos:['relative !important', 'relative !important', 'absolute !important'],
  bs:[3],
  h:[1],
  w:[1,1, 0.23],
  z:15,
}

export default props => 
<div>
<Absolute {...absoluteLeft}>
<PerfectScrollbar>
  <EntityProfileEntryDefaults {...props} /> {/* Default Entity Profile Routes/Containers/Components */}
</PerfectScrollbar>
</Absolute>
<Absolute {...absoluteRight}>
<PerfectScrollbar>
  <EntityProfileInterfaceIdentity {...props} />
  <EntityProfileMenu menu={props.entity}  {...props} />
</PerfectScrollbar>
</Absolute>
</div>