/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { fromUport } from 'assimilation/symbiosis/selectors'
import { uPortGetCredentialsRequest } from 'assimilation/symbiosis/actions'

import UPortLoginAvatar from 'assimilation/display/uport/UPortLoginAvatar'
/* ---------------------------- Module Package ------------------------------ */

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    data: fromUport.getDeltaData(state, `credentials`),
    status: fromUport.getDeltaStatus(state, `credentials`)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  uPortGetCredentialsRequest: ()=>dispatch(uPortGetCredentialsRequest({
    payload: {
      requested: ['name', 'firebase', 'email', 'phone', 'avatar'],
      notifications: true
    },
    metadata: {
      delta: 'credentials'
    }
  })),
})

export default connect(mapStateToProps, mapDispatchToProps)(UPortLoginAvatar);