/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Box, Span } from 'atomic'
import {CommerceProductPriceSum} from 'logic/interface/DataScaffold'
/* ------------------------------- Component -------------------------------- */
export default props => !CommerceProductPriceSum(props.data) ? null: <Box {...props}>${CommerceProductPriceSum(props.data)}</Box>
