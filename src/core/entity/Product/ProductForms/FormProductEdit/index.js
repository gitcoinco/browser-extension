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
import { entityEditRequest} from 'store/departments/actions'
 
import {fromFirestore} from 'store/departments/selectors'


/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'


/*---*--- Recompose ---*---*/
const defaultState = withState({

})
const defaultProps = withProps({

})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
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
  /*--- Extraction ---*/
  const submission = {}
  submission.address = _.pickBy(data, (value, key)=> key.startsWith("address"));
  submission.metadata = _.pickBy(data, (value, key)=> key.startsWith("meta"));
  submission.name = _.pickBy(data, (value, key)=> key.startsWith("name"));
  submission.price = _.pickBy(data, (value, key)=> key.startsWith("price"));
  submission.settings = _.pickBy(data, (value, key)=> key.startsWith("setting"));
  submission.shipping = _.pickBy(data, (value, key)=> key.startsWith("shipping"));
  submission.organization = _.pickBy(data, (value, key)=> key.startsWith("organization"));
  /*--- Metadata/Configuration ---*/
  dispatch(entityEditRequest({
    payload: submission, 
    metadata: {
    branch: [
      'products',
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
  if(data) return {delta, initialValues:{
    ...initialValues,
    shippingWeightType: 'shippingWeightTypePound',
    shippingFulfillment: 'shippingFulfillmentManual',
}}
}

const mapDispatchToProps = dispatch => ({

})

/* -------------------------- Form Configuration ---------------------------- */
const config = {
  form: 'FormProductEdit',
  fields: [],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-- Export Form ---*/
const FormRedux = props => <FormRender { ...props} />
const formRedux = reduxForm(config)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  formRedux,
  queryLifecycle,
  defaultState,
  defaultProps,
)(FormRedux);