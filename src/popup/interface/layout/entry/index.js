/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch, Route } from 'react-router';
/* ------------------------- External Dependencies -------------------------- */
import Box from 'atoms/Box'
import Block from 'atoms/Block'
import SpinnerSquares from 'atoms/SpinnerSquares'

import DialogFactory from 'containers/dialog/DialogFactory'
import DrawerFactory from 'containers/drawer/DrawerFactory'
import AsideDrawerMenu from 'smithing/layout/AsideDrawerMenu'

import ExtensionEntry from './Extension'
import DashboardEntry from './Dashboard'

export default () => (
<div>
  <Block z={[500]} >
    <DrawerFactory>
      <AsideDrawerMenu/>
    </DrawerFactory>
  </Block>
  <Block z={[300]} o={0.999999} >
    <Switch>
      <Route path="/dashboard" component={DashboardEntry} />
      <Route path="/" component={ExtensionEntry} />
    </Switch>
  </Block>
</div>
);
