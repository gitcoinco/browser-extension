/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { 
  compose,
  lifecycle,
  mapProps,
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
import { createValidator, required } from 'logic/forms/validation'

/* ------------------------ Initialize Dependencies ------------------------- */
import { entityBannerAddRequest } from 'store/departments/actions'

/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultState = withState({
  list: null
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
    if(this.props.submitting === true) {
      this.props.reset()
    }
    if(prevProps !== this.props ) {

    }
  }
})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => {
   return {initialValues: {
    eid: props.match.params.eid,
  }
}}

const mapDispatchToProps = (dispatch, props) => ({

})
/* -------------------------- Form Configuration ---------------------------- */
/*--- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  const metadata = {
    branch: [
      props.collection,
      props.match.params.eid,
    ],
    delta: `${props.match.params.eid}|BannerUpdate`,
    location: `${props.collection}/${props.match.params.eid}/banner`,
    trigger: props.match.params.eid,
  }
  dispatch(entityBannerAddRequest({payload: data.storageUpload, metadata}))
})

/*--- Validation ---*/
const validate = createValidator({

})

const config = {
  form: 'FormBannerAdd',
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
  defaultState,
  defaultProps,
)(Render);
