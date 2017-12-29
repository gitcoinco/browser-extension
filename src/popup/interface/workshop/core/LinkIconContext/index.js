/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box } from 'particles'
import { BackgroundGradient, Container, Heading, Link, Paragraph, Section, SVG} from 'atomic'
import { DrawerLink } from 'fusion'
/* ------------------------------- Component -------------------------------- */
const LinkIconSimpleUserContext = props => (
<Flex {...props}>
  <Box flex={['1 1 0']} px={[10]} textAlign="center" {...props.iconWrap} >
    <Link to={`/${props.branch}/${props.id}/${props.destination}`}>
      {!props.svg ? null : <SVG svg={props.svg}  {...props.icon} w={[30]} height={[30]} /> }
    </Link>
    </Box>
  <Box flex={['4 1 0']} pl={[10]} py={[10]} {...props.titleWrap}>
    <Link to={`/${props.branch}/${props.id}/${props.destination}`} color='charcoal' >
      <Heading f={[3]} level={[4]} fontWeight="300" >{props.title}</Heading>
    </Link>
  </Box>
</Flex>
)

LinkIconSimpleUserContext.defaultProps = {
  align: 'center',
  direction: 'row',
}

export default LinkIconSimpleUserContext