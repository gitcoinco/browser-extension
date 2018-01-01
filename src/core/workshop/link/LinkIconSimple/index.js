/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box } from 'particles'
import { BackgroundGradient, Container, Heading, Link, Paragraph, Section, SVG} from 'atomic'
import DrawerLink from 'foundry/drawer/DrawerLink'
/* ------------------------------- Component -------------------------------- */
const LinkIcon = props => (
<Flex {...props} key={props.to} >
  <Box flex={['1 1 0']} px={[10]} textAlign="center" {...props.iconWrap} >
    <Link to={props.to}>
      {!props.svg ? null : <SVG svg={props.svg}  {...props.icon} w={[30]} height={[30]} /> }
    </Link>
    </Box>
  <Box flex={['4 1 0']} pl={[10]} py={[10]} {...props.titleWrap}>
    <DrawerLink to={props.to}>
      <Heading f={[3]} level={[4]} fontWeight="300" >{props.title}</Heading>
    </DrawerLink>
  </Box>
</Flex>
)

LinkIcon.defaultProps = {
  align: 'center',
  direction: 'row',
  to: "/",
}

export default LinkIcon