/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements';
import {
  CardElement,
  PaymentRequestButtonElement
} from 'react-stripe-elements';
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box, Button } from 'atomic'
import Foundry from 'foundry'
import StyleCompose from 'logic/interface/StyleCompose'

/* ------------------------------- Component -------------------------------- */
export default ({ createToken, statusStripe, ...props}) => (
<Box>
  {}
  {!statusStripe ? null :
    <Box>
      <label>
        Card details
        <CardElement style={{base: {fontSize: '18px'}}} />
      </label>

      <Button onClick={createToken} >Add Payment Information</Button>

    </Box>
}
</Box>
)