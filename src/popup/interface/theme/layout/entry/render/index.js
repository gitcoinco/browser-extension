/* ------------------------- Internal Dependencies -------------------------- */
import  { officeMeeting } from 'assets/images'
// Atomic
import React from 'react'
import Box from 'atoms/Box'
import Absolute from 'atoms/Absolute'
import Heading from 'atoms/Heading'
import BackgroundImage from 'atoms/BackgroundImage'
import BackgroundGradient from 'atoms/BackgroundGradient'
import DrawerFactory from 'containers/drawer/DrawerFactory'
// Regions
import BlockBranding  from 'layout/regions/RegionBranding'
import RegionTop  from 'layout/regions/RegionTop'
// Menu
import AsideDrawerMenu from 'layout/menus/AsideDrawerMenu'

/* ---------------------------- Module Package ------------------------------ */
export default props=> 
<Absolute 
left right top bottom
bg='white'
> 
  <BackgroundGradient gradient="blue"/>
  <BackgroundImage src={officeMeeting} o={0.2} />
  <DrawerFactory>
    <AsideDrawerMenu/>
  </DrawerFactory>
  <Box>
    <RegionTop/>
    <BlockBranding/>
  </Box>
</Absolute>
