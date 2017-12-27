/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import {
  branch,
  compose,
  lifecycle,
  withProps,
  withState,
  withStateHandlers,
  renderComponent
} from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import filterKeys from 'filter-keys'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

/* ------------------------- Internal Dependencies -------------------------- */
import { SpinnerSquares } from 'atomic'
import { createValidator, required } from 'logic/forms/validation'

import {  fromAuthentication } from 'store/departments/selectors'
/*--- Redux Store ---*/
import { firestoreDocumentAddRequest } from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'
import firebase from 'firebase'
require("firebase/firestore");

/* --------------------------- Component Entry ------------------------------ */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  /*--- Extraction ---*/
  const submission = {}
  submission.address = _.pickBy(data, (value, key)=> key.startsWith("address"));
  submission.name = _.pickBy(data, (value, key)=> key.startsWith("name"));
  submission.created = _.pickBy(data, (value, key)=> key.startsWith("created"));
  submission.createdBy = data.createdBy
  
  const
  metadata = {
  branch: [
    'resources'
  ],
    delta: 'ResourceAdd',
    trigger: 'ResourceSearch',
  }
  if(data.addressAutoComplete) {
    geocodeByAddress(data.addressAutoComplete)
      .then(results => getLatLng(results[0]))
      .then(latLng => 
        {
          submission.address.addressGeopoint = new firebase.firestore.GeoPoint(latLng.lat, latLng.lng)
          dispatch(firestoreDocumentAddRequest(
            {
              payload: submission, 
              metadata: metadata
            }
          ))
        }
      )
      .catch(error => console.error('Error', error))
  } else {
    dispatch(firestoreDocumentAddRequest(
      {
        payload: submission, 
        metadata: metadata
      }
    ))
  }

})

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})

const StateHandlers = withStateHandlers(
    ({ address = 'San Francisco, CA' }) => ({
      address: address,
    }),
    {
      setAddress: () => (value) => ({
        address:value,
      }),
    }
  )

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})
const config = {
  form: 'FormResourceAdd',
  fields: [
    'nameResource',
    'nameResourceAlias',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

const mapStateToProps = (state, props) => {
  return {
    initialValues: {
      createdBy: fromAuthentication.getUserId(state)
    }
  }
}

const spinnerWhileLoading = (test) => branch(test,renderComponent(()=><SpinnerSquares gradient='cherry' />))

const FormRedux = props => <FormRender { ...props} />
const FormConfiguration = reduxForm(config)
export default compose(
  connect(mapStateToProps),
  spinnerWhileLoading(
    (props) => !props.initialValues.createdBy ? true : false
  ),
  FormConfiguration,
  QueryLifecycle,
  StateHandlers,
)(FormRedux);
