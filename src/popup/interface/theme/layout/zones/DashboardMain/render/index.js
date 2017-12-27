/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react'
import styled from 'styled-components'
import { Absolute, Flex } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
const DashboardMainStyled = styled(Flex)`
  overflow: hidden;
`
DashboardMainStyled.defaultProps = {
  is: 'main',
  justify: 'space-evenly',
}
/* ---------------------------- Module Package ------------------------------ */
export default props => <DashboardMainStyled bs={2} {...props} {...props.layout}/>


