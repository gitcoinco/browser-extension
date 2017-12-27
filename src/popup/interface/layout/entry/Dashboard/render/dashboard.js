/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import Absolute from 'atoms/Absolute'
/*--- Zones ---*/
import { DashboardHeader, DashboardMain, DashboardAside, DashboardMainPanelRight } from 'extensionTheme/layout/zones'
import {DashboardMainPanelLeft, DashboardMainContent} from 'extensionTheme/layout/zones'
/*--- Routes ---*/
import DashboardMainRoutes from 'extensionStore/routes/Dashboard/DashboardMainRoutes'
import DashboardHeaderRoutes from 'extensionStore/routes/Dashboard/DashboardHeaderRoutes'
import DashboardAsideRoutes from 'extensionStore/routes/Dashboard/DashboardAsideRoutes'
import DashboardMainPanelLeftRoutes from 'extensionStore/routes/Dashboard/DashboardMainPanelLeftRoutes'
import DashboardMainPanelRightRoutes from 'extensionStore/routes/Dashboard/DashboardMainPanelRightRoutes'


/* ---------------------------- Module Package ------------------------------ */
export default  ({ zones, header, main, aside, ...props }) => 
<Absolute left right top bottom of='hidden' >
  {/* Header Zone */}
  {!zones.header ? null: (
    <DashboardHeader {...header.layout} >
      <DashboardHeaderRoutes/>
    </DashboardHeader>
  )}
  {/* Main Zone */}
  {!zones.main ? null: (
    <DashboardMain {...main.layout}>
      {!zones.panelLeft 
        ? null 
        :<DashboardMainPanelLeft {...main.regions.panelLeft.layout}>
          <PerfectScrollbar>
            <DashboardMainPanelLeftRoutes/>
          </PerfectScrollbar> 
        </DashboardMainPanelLeft>}
      {!zones.mainContent 
        ? null 
        :<DashboardMainContent {...main.regions.content.layout}>
          <PerfectScrollbar>
            <DashboardMainRoutes/>
          </PerfectScrollbar> 
        </DashboardMainContent>}
      {!zones.panelRight 
        ? null 
        :<DashboardMainPanelRight {...main.regions.panelRight.layout}>
          <PerfectScrollbar>
            <DashboardMainPanelRightRoutes/>
          </PerfectScrollbar> 
        </DashboardMainPanelRight>}
    </DashboardMain>
  )}

  {/* Aside Zone */}
  {!zones.aside ? null :(
    <DashboardAside {...aside.layout}>
      <PerfectScrollbar >
        <DashboardAsideRoutes/>
      </PerfectScrollbar>
    </DashboardAside>
  )}
</Absolute>