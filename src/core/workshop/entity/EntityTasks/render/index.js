/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {BackgroundImage} from 'atomic'
import { FirestoreList } from 'containers'

/* ------------------------------- Component -------------------------------- */
export default props => {
return <FirestoreList
  delta={`${props.match.params.eid}|Tasks`}
  foundry='EntityTaskCard'
  styled={{
    bg: 'white',
    bs: 2,
    br: 5,
    mb: 10,
    p: 15,
    w: [1],
  }}
/>
}