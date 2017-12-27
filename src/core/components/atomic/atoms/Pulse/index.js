/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import Box from 'atoms/Box'
/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */
const Wrapper = styled(Box)`
  background: #45453f;
  position: relative;
  .pulse {
    width: 10px;
    height: 10px;
    border: 5px solid #f7f14c;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    background-color: #716f42;
    z-index: 10;
    position: absolute;
  }

  .dot {
    border: 10px solid #fff601;
    background: transparent;
    -webkit-border-radius: 60px;
    -moz-border-radius: 60px;
    border-radius: 60px;
    height: 50px;
    width: 50px;
    -webkit-animation: pulse 3s ease-out;
    -moz-animation: pulse 3s ease-out;
    animation: pulse 3s ease-out;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    position: absolute;
    top: -20px;
    left: -20px;
    z-index: 1;
    opacity: 0;
  }

 
`
/* ------------------------------- Component -------------------------------- */
const Component = props => (
  <Wrapper {...props}>
    <div className='dot'/>
    <div className='pulse'/>
  </Wrapper>
)
/* ------------------------- Component Properties --------------------------- */

/* ---------------------------- Export Package ------------------------------ */
export default Component