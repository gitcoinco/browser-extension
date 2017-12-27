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
const defaultProps = withProps(props=>{
  return {
    onSubmit,
    collection: props.collection,
  }
})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
    this.props.firestoreDocumentFilterGetRequest({
      payload: {},
      metadata:{
        branch: [
          this.props.collection
        ],
        delta:`${this.props.entity}Search`,
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
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  const where = []
  if(data.searchNameDisplay) where.push(['name.nameDisplay', '==', data.searchNameDisplay ])
  if(data.searchNameAlias) where.push(['name.nameAlias', '==', data.searchNameAlias ])
  if(data.searchTaxonomyCategory) where.push(['taxonomy.taxonomyCategory', '==', data.searchTaxonomyCategory ])
  if(data.searchTaxonomyCollection) where.push(['taxonomy.taxonomyCollection', '==', data.searchTaxonomyCollection ])
  dispatch(
    firestoreDocumentFilterGetRequest({
      payload: {},
      metadata:
      {
        branch: [
          props.collection
        ],
        delta:`${props.entity}Search`,
        filters:
        {
          where
        }
      }
    })
  )
})

const config = {
  form: 'SearchEventAdvanced',
  fields: [
    'searchEventName',
    'searchEventAlias',
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

