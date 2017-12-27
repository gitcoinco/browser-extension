/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  compose,
  lifecycle,
  withProps,
  withState,
  renderComponent
} from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'
import Form from './render'

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {

  }
})

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {

})

const mapStateToProps = (state, props) => {

}

const mapDispatchToProps = dispatch => ({

})
const config = {
  form: 'FormProjectEdit',
  fields: [],
  destroyOnUnmount: true,
  onSubmit,
  validate
}
const formRedux = reduxForm(config)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  formRedux,
  QueryLifecycle,
)(Form);