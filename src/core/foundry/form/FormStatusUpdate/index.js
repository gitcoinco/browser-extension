/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import { connect } from 'react-redux'
import {
  branch,
  compose,
  lifecycle,
  withProps,
  withState,
  renderComponent
} from 'recompose'
import { 
  reduxForm,
  reset
} from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import FormRender from './render'
import {  fromAuthentication } from 'store/departments/selectors'
/* ------------------------ Initialize Dependencies ------------------------- */
import { SpinnerSquares } from 'atomic'
import { createValidator, required } from 'logic/forms/validation'
/*--- Redux Store ---*/
import { 
  entityAddRequest,
 } from 'store/departments/actions'
 

/* ---------------------------- Module Package ------------------------------ */
/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props ) {

    }
  }
})
const spinnerWhileLoading = (test) => branch(test,renderComponent(SpinnerSquares))
/* -------------------------- Form Configuration ---------------------------- */
/*--- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {

  const submission = {}
  submission.content = _.pickBy(data, (value, key)=> key.startsWith("content"));
  submission.created = _.pickBy(data, (value, key)=> key.startsWith("created"));
  submission.createdBy = data.createdBy

  const metadata = {
    branch: [
      props.collection,
      props.match.params.eid,
      'updates',
    ],
    delta: `${props.match.params.eid}|StatusUpdateAdd`,
    trigger: `${props.match.params.eid}|StatusUpdates`,
  }

  /*--- Send | Dispatch ---*/
  dispatch(entityAddRequest({payload:submission, metadata }))

})

/*--- Validation ---*/
const validate = createValidator({

})

const config = {
  form: 'FormStatusUpdate',
  fields: [],
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
/* ---------------------------- Form Handlers ------------------------------- */
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
