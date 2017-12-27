/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { exampleAction } from 'store/departments/actions'
import { fromForm } from 'store/departments/selectors'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
const FieldRelationshipsOrganization = props => <FormRender { ...props} />

/*-- Event Handlers ---*/
const onChange = (data, dispatch) => new Promise((resolve, reject) => {

  const { destructureVariables } = data
})

/* ----------------------------- Form Validation -------------------------------- */

/* ----------------------------- React Redux -------------------------------- */
const mapStateToProps = (state) => ({
  initialValues: {

  }
})

const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(FieldRelationshipsOrganization)
