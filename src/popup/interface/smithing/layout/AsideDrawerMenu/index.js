import React from 'react'
import { MenuAsideItem } from 'foundry'
import { MenuMainDashboard } from 'static/menus'
export default props => <div>{MenuMainDashboard.map(item=> <MenuAsideItem {...props} {...item}/> )}</div>