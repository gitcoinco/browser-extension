/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components'
import { Box } from 'particles'
/* ------------------------- External Dependencies -------------------------- */
import SiteEntry from 'layout/entry/Site'
import DashboardEntry from 'layout/entry/Dashboard'
import { DialogFactory, DrawerFactory } from 'containers'
import { ToastContainer, toast } from 'react-toastify';

const Magic = styled.div`
opacity: 0.999999;
z-index: 500;
`

const ToastSetting = {
  position: 'top-right',
  type: 'default',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  pauseOnHover: true,
}

export default () => (
<div>
  <Box z={[10000]} >
    <DialogFactory/>
    <DrawerFactory/>
    <ToastContainer {...ToastSetting}/>
  </Box>
  <Magic>
    <Switch>
      <Route path="/dashboard" component={DashboardEntry} />
      <Route path="/" component={SiteEntry} />
    </Switch>
  </Magic>
</div>
);
