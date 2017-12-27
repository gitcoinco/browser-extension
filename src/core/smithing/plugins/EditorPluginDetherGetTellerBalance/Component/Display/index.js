/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import SVG from 'atoms/SVG'
import { svg } from 'assets'
import DetherGetTellerBalanceForm from 'assimilation/fetching/dether/DetherGetTellerBalanceForm'
/* ---------------------------- Module Package ------------------------------ */
export default props => !props.state ? null :
<Box
  bg={props.state.background}
  color={props.state.color}
  w={Number(props.state.w)}
  p={Number(props.state.p)}
  py={Number(props.state.py)}
  px={Number(props.state.px)}
  m={Number(props.state.m)}
  my={Number(props.state.my)}
  mx={Number(props.state.mx)}
  w={Number(props.state.w)}
>
  {
  props.readOnly ? null :
  <Flex align='center' >
    <SVG svg={svg.ethereum} svgColor='blue' w={60} />
    <Heading level={[3]} f={[3]}>
      Dether | Get Teller Balance
    </Heading>
  </Flex>
  }
  <DetherGetTellerBalanceForm delta='unique' />
</Box>