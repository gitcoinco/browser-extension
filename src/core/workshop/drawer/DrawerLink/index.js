import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { Button } from 'atomic'
import { DrawerClose } from 'containers'

const DrawerLink  = props => <Link {...props} ><DrawerClose>{props.children}</DrawerClose></Link>

Link.defaultProps = {
  to: '/'
}

export default DrawerLink
