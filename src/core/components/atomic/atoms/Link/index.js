/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'
import { color, fontSize, space, width } from 'particles'

const Link = styled(LinkRouter)`
  ${color}
  ${space}
  ${width}
`

/* ------------------------- Component Properties --------------------------- */
Link.propTypes = {

}
Link.defaultProps = {
  color: 'white',
  to: '/',
}

/* ------------------------------- Component -------------------------------- */
export default props => <Link {...props} />
