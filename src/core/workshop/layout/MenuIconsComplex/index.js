import React from 'react'
import { MenuIconComplexItem } from 'foundry'
import { MenuMainDashboard } from 'static/menus'
export default props => <div>{MenuMainDashboard.map(item=> <MenuIconComplexItem {...props} {...item}/> )}</div>