/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements';
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box } from 'particles'
import StyleCompose from 'logic/interface/StyleCompose'
import StripeInjection from '../../StripeInjection'
/* ------------------------------- Component -------------------------------- */
export default ({ statusStripe, ...props}) => (
<Box>
  {!statusStripe ? null :
  <StripeProvider apiKey={process.env.REACT_APP_STRIPE}>
    <Elements>
      <StripeInjection {...props} />
    </Elements>
  </StripeProvider>
}
</Box>
)