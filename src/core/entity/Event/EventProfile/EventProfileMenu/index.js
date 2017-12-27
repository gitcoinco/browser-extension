/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {Box} from 'atomic'
import {
  LinkIconContext,
} from 'foundry'
import {
  events
} from 'static/menus'
/* ------------------------------- Component -------------------------------- */
export default props => <Box bg='white' bs={[1]} p={[10]} >{events.map(item=> <LinkIconContext {...item} {...props} /> )}</Box> 