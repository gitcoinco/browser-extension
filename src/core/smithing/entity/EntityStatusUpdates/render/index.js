/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {BackgroundImage} from 'atomic'
import { FirestoreList } from 'containers'

/* ------------------------------- Component -------------------------------- */
export default props => {
return <FirestoreList
  delta={`${props.match.params.eid}|StatusUpdates`}
  foundry='EntityStatusUpdateCard'
  styled={{
    bg: 'white',
    bs: 0,
    br:5,
    mb:20,
    p: 15,
    w: [1],
  }}
/>
}