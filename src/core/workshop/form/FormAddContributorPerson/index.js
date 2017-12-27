/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { 
  compose,
  lifecycle,
} from 'recompose'
import { 
  reduxForm,
  reset
} from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
import { createValidator, required } from 'logic/forms/validation'
/* ------------------------ Initialize Dependencies ------------------------- */
import { fromFirestore } from 'store/departments/selectors'
import { 
  entityProjectEditRequest,
  firestoreDocumentFilterGetRequest
 } from 'store/departments/actions'

/* ---------------------------- Module Package ------------------------------ */
/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
    this.props.firestoreDocumentFilterGetRequest({
      payload: {},
      metadata:{
        branch: [
          'people'
        ],
        delta: this.props.delta
      }
    })
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props ) {

    }
  }
})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => ({
    data: fromFirestore.getQueryData(state, props.delta)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentFilterGetRequest: (settings)=>dispatch(firestoreDocumentFilterGetRequest(settings)),
})
/* -------------------------- Form Configuration ---------------------------- */
/*--- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  const rawList = {}
  if(!data.contributors) return null
  data.contributors.forEach(item=> rawList[item.eid] = true)
  const submission = {
      contributors: {
        contributorsRaw: rawList,
        contributorsFormatted: data.contributors
      }
  }
  /*--- Metadata/Configuration ---*/
  dispatch(entityProjectEditRequest({
    payload: submission, 
    metadata: {
    branch: [
      props.collection,
      props.match.params.eid,
    ],
    delta: `${props.match.params.eid}|UpdateContributors`,
    trigger: `${props.match.params.eid}`,
    }
  }))
})

/*--- Validation ---*/
const validate = createValidator({

})

const config = {
  form: 'FormEntityAddContributorPerson',
  fields: [],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/* ---------------------------- Form Handlers ------------------------------- */

export default compose(
  reduxForm(config),
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(Render);
