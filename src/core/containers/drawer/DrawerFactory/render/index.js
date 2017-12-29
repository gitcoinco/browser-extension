/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import { Fixed, Drawer } from 'particles'
import Absolute from 'atoms/Absolute'
import Heading from 'atoms/Heading'
import DrawerClose from 'containers/drawer/DrawerClose'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Absolute top={props.drawer} bottom={props.drawer} left={props.drawer} right={props.drawer} z={1000} >
  <Drawer
      bs={[2]}
      borderRadius={'0 25px 25px 0'}
      open={props.drawer}
      position='left'
      py={50}
      color='white'
      gradient='blue'
      overflow='hidden'
      z={200}
    >
    <Absolute top right borderRadius={9999} mt={[5]} mr={[5]} gradient='cherry' p={[5]}  ><DrawerClose><Heading f={[2]} level={[6]}><a>x</a></Heading></DrawerClose></Absolute>
    <PerfectScrollbar wheelPropagation>
      {props.children}
    </PerfectScrollbar>
	</Drawer>
  {!props.drawer ? null : <Fixed top bottom left right onClick={props.drawerClose} w={1} height={1} z={100} /> }
  </Absolute>
