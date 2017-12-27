/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import _ from 'lodash'
import filterKeys from 'filter-keys'

/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import {
  entityEventAddRequest
} from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
const FormRedux = props => <FormRender { ...props} />

/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {

  /*--- Setup ---*/
  const submission = {}

  /*--- Extraction ---*/
  submission.address = _.pickBy(data, (value, key)=> key.startsWith("address"));
  submission.biography = _.pickBy(data, (value, key)=> key.startsWith("biography"));
  submission.contact =  _.pickBy(data, (value, key)=> key.startsWith("contact"));
  submission.meta = _.pickBy(data, (value, key)=> key.startsWith("meta"));
  submission.name = _.pickBy(data, (value, key)=> key.startsWith("name"));

  /*--- Payload ---*/
  const payload = submission

  /*--- Metadata/Configuration ---*/
  const metadata = {
    branch: [
      'events',
    ],
    delta: 'EventAdd',
    trigger: 'EventSearch',
  }
  
  dispatch(entityEventAddRequest({payload, metadata }))
})

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({
})

/* ----------------------------- React Redux -------------------------------- */
const mapStateToProps = (state, props) =>(
{
  initialValues: {}
})

const mapDispatchToProps = dispatch => ({})

const config = {
  form: 'FormEventAdd',
  fields: [],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormRedux))
