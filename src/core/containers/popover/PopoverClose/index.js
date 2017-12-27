/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux';
import Render from './render';
/* ---------------------------- Module Package ------------------------------ */
import { popoverClose } from 'store/departments/actions'

const mapDispatchToProps = (dispatch, props) => ({
  popoverClose: () => dispatch(popoverClose({payload:{delta: props.delta }}))
})

export default connect(null, mapDispatchToProps)(Render);
