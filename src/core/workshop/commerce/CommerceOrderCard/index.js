/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import idx from './idx';

/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute} from 'particles'
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import CommerceOrderComplete from 'containers/commerce/CommerceOrderComplete'
import Item from 'foundry/core/Item'
import CardDefault from 'static/style/CardDefault'

/* ------------------------------- Component -------------------------------- */
export default (props) => {
/*--- Extraction ---*/
const id = idx(props, _ => _.id)
const eid = idx(props, _ => _.eid)
const items = idx(props, _ => _.items)
const products = idx(props, _ => _.products)

/*--- Safeguard ---*/
if (!props.id) return null

/*--- Component ---*/
return (
<Flex direction={['row']} align='stretch' justify='center' p={[10]} {...props} >
    <Box
      bs={1}
      br={10}
    >
    <Box
      p={10}
    >
      <Heading level={[4]} f={[4,5]} fw={300} >
        Order Number: {eid}
      </Heading>
    </Box>
  
      {
        products.map(product=> <Item
        {...product}
        foundry={'ProductCardOrderPreview'}
      />  )
      }

    <Box mt={[15,30]} w={1}>
      <CommerceOrderComplete id={id} >
        <Button gradient='cherry' w={1}>Confirm Order</Button>
      </CommerceOrderComplete>
    </Box>
    </Box>
  </Flex>
)
}