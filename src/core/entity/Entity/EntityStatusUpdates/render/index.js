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
    bs: 1,
    br:5,
    mb:10,
    p: 5,
    w: [1],
  }}
/>
}