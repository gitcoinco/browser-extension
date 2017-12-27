import React from 'react'
import { Link } from 'atomic'
import { DrawerClose } from 'containers'

export default props => <Link {...props} ><DrawerClose>{props.children}</DrawerClose></Link>

