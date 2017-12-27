/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  FirestoreDelete
} from 'containers'
/* ------------------------------- Component -------------------------------- */
export default props =>
<FirestoreDelete
  id={props.id}
  collection={props.collection}
  gradient='cherry'>
  Delete Entity (irreversible)
</FirestoreDelete>