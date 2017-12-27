/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
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
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { 
  entityEditRequest,
 } from 'store/departments/actions'
 
import {
  fromFirestore
} from 'store/departments/selectors'


/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/*---*--- Lifecylce Methods ---*---*/

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  /*--- Extraction ---*/
  const submission = {}
  submission.address = _.pickBy(data, (value, key)=> key.startsWith("address"));
  submission.biography = _.pickBy(data, (value, key)=> key.startsWith("biography"));
  submission.contact =  _.pickBy(data, (value, key)=> key.startsWith("contact"));
  submission.metadata = _.pickBy(data, (value, key)=> key.startsWith("meta"));
  submission.name = _.pickBy(data, (value, key)=> key.startsWith("name"));
  submission.settings = _.pickBy(data, (value, key)=> key.startsWith("settings"));
  /*--- Metadata/Configuration ---*/
  dispatch(entityEditRequest({
    payload: submission, 
    metadata: {
    branch: [
      'people',
      props.delta,
    ],
    delta: `${props.delta}|Update`,
    trigger: `${props.delta}`,
    }
  }))
})

const mapStateToProps = (state, props) => {
  const delta = props.match.params.eid
  const data = fromFirestore.getQueryData(state, delta)
  let initialValues = {};
  Object.keys(data).map(key=> ({...data[key]})).forEach(i=> initialValues = {...initialValues, ...i})
  if(data) return {delta, initialValues:{...initialValues}}
}

const mapDispatchToProps = dispatch => ({

})

/* -------------------------- Form Configuration ---------------------------- */
const config = {
  form: 'FormPersonEdit',
  fields: [],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-- Export Form ---*/
const FormSettings = reduxForm(config)
const Render = props => <FormRender { ...props} />
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  FormSettings,
)(Render);