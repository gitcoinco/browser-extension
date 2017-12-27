/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute, Box } from 'particles'
import { BackgroundGradient, Image } from 'atomic'

/* --------------------------- Styled Components ---------------------------- */
const Wrapper = styled(Box)`
  position: relative;

  img {
    max-width: 100% !important;
    width: 100% !important;
  }
`
const Content = styled(Box)`
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  position: absolute;
  overflow: hidden;
`

/* ------------------------- Component Properties --------------------------- */

/* ------------------------------- Component -------------------------------- */
const Component = props => {
  return (
    <Wrapper>
      <Image src={assets.devices.browser} />
      <Content gradient='secondary' mb={['0.1%']} ml={[0]} mr={[0]} mt={['9.14%']}  z={[20]}>
        {props.children}
      </Content>
    </Wrapper>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Component