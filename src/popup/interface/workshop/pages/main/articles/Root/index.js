/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import FirestoreList from 'containers/firestore/FirestoreList'
/* ------------------------------- Component -------------------------------- */
export default props =>
<FirestoreList
    collection='articles'
    delta='ArticleSearch'
    entity='article'
    foundry='EntityCardLarge'
    styled={{
      w: [1],
    }}
  />