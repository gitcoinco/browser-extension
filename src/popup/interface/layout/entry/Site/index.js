/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
/* ------------------------- Internal Dependencies -------------------------- */
import { officeMeeting } from 'assets/images'
// Atoms
import Absolute from 'atoms/Absolute'
import BackgroundImage from 'atoms/BackgroundImage'
import BackgroundGradient from 'atoms/BackgroundGradient'

// Routes
import SiteMainRoutes from 'extensionStore/routes/SiteMainRoutes'

// Regions
import RegionTop  from 'layout/regions/RegionTop'
import RegionBranding  from 'layout/regions/RegionBranding'
/* ---------------------------- Module Package ------------------------------ */
export default props => (
<Absolute left right top bottom>
  <BackgroundGradient gradient="purpleBlue"/>
  <BackgroundImage src={officeMeeting} o={0.2} />

  <RegionTop />
  <RegionBranding/>
  <SiteMainRoutes/>
</Absolute>)

