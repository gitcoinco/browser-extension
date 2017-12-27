/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {  Block } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */

const layout = {
  bg: 'white',
  is: 'main',
  w: 1
}
/* ---------------------------- React Component ----------------------------- */
export default props => (
<Block {...props} {...layout} >
  {props.children}
</Block>
)
