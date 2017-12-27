/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import {
  branch,
  compose,
  lifecycle,
  withProps,
  withState,
  renderComponent
} from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import filterKeys from 'filter-keys'

/* ------------------------- Internal Dependencies -------------------------- */
import { SpinnerSquares } from 'atomic'
import { createValidator, required } from 'logic/forms/validation'

import {  fromAuthentication } from 'store/departments/selectors'
/*--- Redux Store ---*/
import { firestoreDocumentAddRequest } from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {

  /*--- Extraction ---*/
  const submission = {}
  submission.name = _.pickBy(data, (value, key)=> key.startsWith("name"));
  submission.created = _.pickBy(data, (value, key)=> key.startsWith("created"));
  submission.createdBy = data.createdBy
  
  /*--- Metadata/Configuration ---*/
  dispatch(firestoreDocumentAddRequest({
    payload: submission, 
    metadata: {
    branch: [
      'deals'
    ],
    delta: 'DealAdd',
    trigger: 'DealSearch',
    }
  }))
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


/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({
  nameDisplay: required,
})
const config = {
  form: 'FormDealAdd',
  fields: [
    'nameDeal',
    'nameDealAlias',
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
)(FormRedux);
