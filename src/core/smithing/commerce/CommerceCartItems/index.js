/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import idx from './idx';
/* ------------------------- Internal Dependencies -------------------------- */
import Box from 'atoms/Box'
import FirestoreListCompose from 'containers/firestore/FirestoreListCompose'
/* ------------------------------- Component -------------------------------- */
export default (props) => {
/*--- Extraction ---*/
const id = idx(props, _ => _.id)
const cartItems = idx(props, _ => _.items)
if (!props.id) return null

/*--- Component ---*/
return (
<Box w={1} >
  {!cartItems ? null :
    <Box mt={[20,40]} >
      <FirestoreListCompose
        collection={'products'}
        entity='product'
        delta={`CommerceComposeCartItems`}
        foundry='ProductCardCart'
        path='/'
        references={Object.keys(cartItems)}
        styledItems={{
          br: 3,
          bs: 0,
          mb:[10, 20],
          w: [1],
        }}
      />
    </Box>
  }
</Box>
)}