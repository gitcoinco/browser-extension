/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Box } from 'particles'

const MainContent = styled(Box)`
  overflow-x: hidden;
  overflow-y: hidden;
`

export default props => <MainContent is="section" {...props} {...props.layout}/>


