/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
// Atoms
import Absolute from 'atoms/Absolute'
import BackgroundGradient from 'atoms/BackgroundGradient'

// Routes
import SiteMainRoutes from 'extensionStore/routes/SiteMainRoutes'

// Regions
import RegionBranding  from 'layout/regions/RegionBranding'
/* ---------------------------- Module Package ------------------------------ */
export default props => (
<Absolute left right top bottom>
  <BackgroundGradient gradient="blue" gradientDir='120deg' />
  <PerfectScrollbar>
    <RegionBranding/>
    <SiteMainRoutes/>
  </PerfectScrollbar>
</Absolute>)

