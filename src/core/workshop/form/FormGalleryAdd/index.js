/* ------------------------- External Dependencies -------------------------- */
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
import { createValidator, required } from 'logic/forms/validation'
/* ------------------------ Initialize Dependencies ------------------------- */
import { entityBannerAddRequest,
entityImagesAddRequest } from 'store/departments/actions'

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
    if(prevProps !== this.props ) {

    }
  }
})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => ({
   
})

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilesDrop: (files)=> { dispatch(entityImagesAddRequest({
      payload:files,
      metadata: {
        branch: [
          props.collection,
          props.match.params.eid,
        ],
        delta: props.match.params.eid,
        location: `${props.collection}/${props.match.params.eid}/gallery`,
      }
    }
    ))}
  }
}
/* -------------------------- Form Configuration ---------------------------- */
/*--- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {

})

/*--- Validation ---*/
const validate = createValidator({

})

const config = {
  form: 'FormComposed',
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
