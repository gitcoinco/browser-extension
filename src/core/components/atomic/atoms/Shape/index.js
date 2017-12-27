/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import { fill, boxShadow, gradient, height, space, width } from 'quarks'
import Absolute from 'atoms/Absolute'
import SVG from 'atoms/SVG'
/* --------------------------- Styled Components ---------------------------- */
const Wrapper = styled(Absolute)`
  overflow: hidden;
  z-index: 10;
  svg {
    height: 100%;
    width: 100%;
  }

  ${boxShadow}
  ${height}
  ${gradient}
  ${fill}
  ${space}
  ${width}
  display: inline-block;
    & svg {
      ${height}
      ${fill}
      ${width}
    }

`
/* ------------------------------- Component -------------------------------- */
export default props => (
    <Wrapper {...props} p={[0]} >
      <SVG svg={props.svg} />
    </Wrapper>
  )
