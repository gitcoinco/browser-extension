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
      <Image src={assets.devices.MacbookPro} />
      <Content gradient='secondary' mb={['12.15%']} ml={['16.65%']} mr={['16%']} mt={['4.4%']}  z={[20]}>
        {props.children}
      </Content>
    </Wrapper>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Component