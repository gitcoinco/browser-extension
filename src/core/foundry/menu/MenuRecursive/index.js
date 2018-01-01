/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box } from 'particles'
import { BackgroundGradient, Container, Heading, Link, Paragraph, Section, SVG} from 'atomic'
import DrawerLink from 'foundry/drawer/DrawerLink'
import { PopoverPure } from 'containers'
import { MenuRecursive as MenuAsideItemRecurse } from 'foundry'
/* ------------------------------- Component -------------------------------- */
const MenuAsideItem = props => 
{
let SubMenuItems= undefined
if (props.childrenItems) SubMenuItems = <Box p={10} bg='white' bs={2} >{_.map(props.childrenItems, MenuAsideItemRecurse)}</Box>
return (
<Flex
  key={props.to}
  align='center'
  {...props.styledContainer}
>
  <Box flex={['1 1 0']}
    textAlign="center"
    pr={10}
    {...props.styledIconWrapper} 
    >
    <DrawerLink to={props.to}>
      {!props.svg ? null : <SVG svg={props.svg} {...props.icon} w={[30]} height={[30]} /> }
    </DrawerLink>
    </Box>
  <Box flex={['4 1 0']} pr={[10]} py={[10]} {...props.styledLinkWrapper} >
    <DrawerLink to={props.to}>
      <Heading f={[3]} level={[4]} fontWeight="300" >{props.title}</Heading>
    </DrawerLink>
  </Box>
  {/*
   * Recursive Item Creation
   */}
  {!SubMenuItems? null
  : <Box {...props.styledChildWrapper} >
    <PopoverPure delta={`${props.title}${props.owner}SubMenu`} body={SubMenuItems} place="below" preferPlace="below"> 
      <Box mx={[5,10]}><Heading level={[3]} f={[4]}>+</Heading></Box>
    </PopoverPure>
    </Box>
  }
</Flex>
)
}

MenuAsideItem.defaultProps = {
  align: 'center',
  direction: 'row',
  to: "/",
}

export default MenuAsideItem