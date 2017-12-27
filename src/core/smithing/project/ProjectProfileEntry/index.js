/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import { fromTheme } from 'store/departments/selectors'
import { Absolute }from 'atomic'
import {
  EntityProfileEntryDefaults,
} from 'foundry'
import { 
  EntityProfileMenu,
  EntityProfileInterfaceIdentity
} from 'entity'
/* ------------------------------- Component -------------------------------- */
const Profile = ({ entityLayout, ...props}) => 
<div>
<Absolute {...entityLayout.absoluteLeft} left right bottom top >
<PerfectScrollbar>
  <EntityProfileEntryDefaults {...props} /> {/* Default Entity Profile Routes/Containers/Components */}
</PerfectScrollbar>
</Absolute>
<Absolute {...entityLayout.absoluteRight}>
<PerfectScrollbar>
  <EntityProfileInterfaceIdentity {...props} />

  
  <EntityProfileMenu menu={props.entity} {...props} />
</PerfectScrollbar>
</Absolute>
</div>

const mapStateToProps = (state, props) => ({
    entityLayout: fromTheme.getDelta(state, 'entityProfileLayout')
  }
)

export default connect(mapStateToProps)(Profile)