/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
import { reduxForm, reset } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

import Render from './render';
/* ------------------------ Initialize Dependencies ------------------------- */
import { firestoreDocumentFilterGetRequest, dialogOpen } from 'store/departments/actions'

/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultProps = withProps({
  onSubmit,
})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
    this.props.firestoreDocumentFilterGetRequest({
      payload: {},
      metadata:{
        branch: [
          'resources'
        ],
        delta: 'ResourceSearch',
      }
    })
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})

const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentFilterGetRequest: (settings)=>dispatch(firestoreDocumentFilterGetRequest(settings)),
})

/* -------------------------- Form Configuration ---------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  const where = []
  if(data.searchProjectName) where.push(['name.nameDisplay', '==', data.searchProjectName ])
  if(data.searchProjectAlias) where.push(['name.nameAlias', '==', data.searchProjectAlias ])
  dispatch(
    firestoreDocumentFilterGetRequest({
      payload: {},
      metadata:
      {
        branch: [
          'resources'
        ],
        delta: 'ResourceSearch',
        filters:
        {
          where
        }
      }
    })
  )
})

const config = {
  form: 'SearchResourceAdvanced',
  fields: [
    'searchResourceName',
    'searchResourceAlias',
  ],
  destroyOnUnmount: true,
  onSubmit,
}

/* --------------------------- Export Default ------------------------------- */
export default compose(
  reduxForm(config),
  connect(null, mapDispatchToProps),
  defaultProps,
  queryLifecycle,
)(Render);

