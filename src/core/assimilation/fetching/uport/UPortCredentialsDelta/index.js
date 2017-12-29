/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
/* ------------------------- Internal Dependencies -------------------------- */
import { fromUport } from 'assimilation/symbiosis/selectors'
import { uPortGetCredentialsRequest } from 'assimilation/symbiosis/actions'
import UPortCardSimple from 'assimilation/display/uport/UPortCardSimple'
/* ---------------------------- Module Package ------------------------------ */
const mapStateToProps = (state, props) => ({
    data: fromUport.getDeltaData(state, `credentials`),
    status: fromUport.getDeltaStatus(state, `credentials`)
  }
)

export default connect(mapStateToProps)(UPortCardSimple);