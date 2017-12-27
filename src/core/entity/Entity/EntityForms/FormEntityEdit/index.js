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
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
/* ------------------------- Internal Dependencies -------------------------- */
import { SpinnerSquares } from 'atomic'
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { 
  firestoreDocumentUpdateRequest,
  entityOrganizationEditRequest,
 } from 'store/departments/actions'
 
import {
  fromFirestore
} from 'store/departments/selectors'

import FormRender from './render'
import firebase from 'firebase'
require("firebase/firestore");
/* ------------------------ Initialize Dependencies ------------------------- */

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
  submission.taxonomy = _.pickBy(data, (value, key)=> key.startsWith("taxonomy"));
  submission.settings = _.pickBy(data, (value, key)=> key.startsWith("settings"));
  /*--- Metadata/Configuration ---*/
  const
  metadata = {
  branch: [
    props.collection,
    props.delta,
  ],
  delta: 'EntityAdd',
  }
  if(data.addressAutoComplete) {
    geocodeByAddress(data.addressAutoComplete)
      .then(results => getLatLng(results[0]))
      .then(latLng => 
        {
          submission.address.addressGeopoint = new firebase.firestore.GeoPoint(latLng.lat, latLng.lng)
          dispatch(firestoreDocumentUpdateRequest(
            {
              payload: submission, 
              metadata: metadata
            }
          ))
        }
      )
      .catch(error => console.error('Error', error))
  } else {
    dispatch(firestoreDocumentUpdateRequest(
      {
        payload: submission, 
        metadata: metadata
      }
    ))
  }
})

const mapStateToProps = (state, props) => {
  const delta = props.match.params.eid
  const data = fromFirestore.getQueryData(state, delta)
  let initialValues = {};
  if(!data) return null
  Object.keys(data).map(key=> ({...data[key]})).forEach(i=> initialValues = {...initialValues, ...i})
  if(data) return {delta, initialValues:{...initialValues}}
}

const mapDispatchToProps = dispatch => ({

})

/* -------------------------- Form Configuration ---------------------------- */
const config = {
  form: 'FormOrganizationEdit',
  fields: [],
  destroyOnUnmount: true,
  onSubmit,
  validate
}
const spinnerWhileLoading = (test) => branch(test,renderComponent(()=><SpinnerSquares gradient='cherry' />))
/*-- Export Form ---*/
const FormRedux = props => <FormRender { ...props} />
const FormConfiguration = reduxForm(config)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  spinnerWhileLoading(
    (props) => !props.initialValues ? true : false
  ),
  FormConfiguration,
)(FormRedux);