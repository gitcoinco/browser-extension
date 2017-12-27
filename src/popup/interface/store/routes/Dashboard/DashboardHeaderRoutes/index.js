/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import Box from 'atoms/Box'
import Route from 'molecules/Route'
/* ------------------------- External Dependencies -------------------------- */
import RegionTop  from 'layout/regions/RegionTop'
import RegionBranding  from 'layout/regions/RegionBranding'

export default () => (
  <Box>
    <Route path="/dashboard" component={RegionBranding} />
  </Box>);

