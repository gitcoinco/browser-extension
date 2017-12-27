/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import { connect } from 'react-redux'
import { 
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
import Render from './render';
/* ------------------------ Initialize Dependencies ------------------------- */
import { createValidator, required } from 'logic/forms/validation'
/*--- Redux Store ---*/
import { 
  entityAddRequest,
 } from 'store/departments/actions'
 

/* ---------------------------- Module Package ------------------------------ */
/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props ) {

    }
  }
})

/* -------------------------- Form Configuration ---------------------------- */
/*--- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {

  const submission = {}
  submission.name = _.pickBy(data, (value, key)=> key.startsWith("name"));
  submission.task =  _.pickBy(data, (value, key)=> key.startsWith("task"));
  submission.metadata =  _.pickBy(data, (value, key)=> key.startsWith("meta"));

  const metadata = {
    branch: [
      props.collection,
      props.match.params.eid,
      'tasks',
    ],
    delta: `${props.match.params.eid}|TaskAdd`,
    trigger: `${props.match.params.eid}|Tasks`,
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

/* ---------------------------- Form Handlers ------------------------------- */

export default compose(
  reduxForm(config),
  connect(),
  queryLifecycle,
)(Render);
