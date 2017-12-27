/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { branch,compose,renderComponent } from 'recompose'
import {Box, SpinnerSquares } from 'atomic'
import { LinkIconContext } from 'foundry'
import menus from 'static/menus'
/* ------------------------------- Component -------------------------------- */
const Menu = props => 
<Box bg='white' bs={[1]} p={[10]} >
{
!menus[props.menu] ? null :
menus[props.menu].map(item=> <LinkIconContext {...item} {...props.data} />)
}
</Box>

const spinnerWhileLoading = (test) => branch(test,renderComponent(()=><SpinnerSquares gradient='cherry' />))
export default compose(
  spinnerWhileLoading(
    (props) => !(props.data && props.data.id) ? true : false
  ),
)(Menu);
