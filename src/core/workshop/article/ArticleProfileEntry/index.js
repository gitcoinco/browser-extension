/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import { fromTheme } from 'store/departments/selectors'
import { Absolute }from 'atomic'

/*-* Foundry *-*/
import EntityProfileEntryDefaults from 'foundry/entity/EntityProfileEntryDefaults'
import EntityProfileMenu from 'entity/Entity/EntityProfile/EntityProfileMenu'
import EntityProfileInterfaceIdentity from 'entity/Entity/EntityProfile/EntityProfileInterfaceIdentity'

/* ------------------------------- Component -------------------------------- */
const Profile = ({ entityLayout, ...props}) => 
<div>
<Absolute {...entityLayout.absoluteLeft}>
<PerfectScrollbar>
  <EntityProfileEntryDefaults {...props} /> {/* Default Entity Profile Routes/Containers/Components */}
</PerfectScrollbar>
</Absolute>
<Absolute {...entityLayout.absoluteRight}>
<PerfectScrollbar>
  <EntityProfileInterfaceIdentity {...props} />
  <EntityProfileMenu menu="article" {...props} />
</PerfectScrollbar>
</Absolute>
</div>

const mapStateToProps = (state, props) => ({
    entityLayout: fromTheme.getDelta(state, 'entityProfileLayout')
  }
)

export default connect(mapStateToProps)(Profile)