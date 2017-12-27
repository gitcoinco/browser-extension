/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { Item } from 'foundry'
import { 
  fromStripe,
  fromFirestore,
} from 'store/departments/selectors'


import {
  stripeInitializeRequest,
  stripeTokenCreateRequest,
} from 'store/departments/actions'
import Render from './render';
/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultState = withState({

})
const defaultProps = withProps({

})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle(
{
  /*--- Did Mount | BEGIN ---*/
  componentDidMount()
  {
    this.props.stripeInitializeRequest()
  },
  /*--- Did Mount | END ---*/

  /*--- Did Update | BEGIN ---*/
  componentDidUpdate(prevProps)
  {

  }
  /*--- Did Update | End ---*/

})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => {
  return {
    eid: fromFirestore.getUserProfileEid(state, 'AuthenticatedProfile'),
    statusStripe: fromStripe.getStatus(state)
  }
}
const mapDispatchToProps = (dispatch, props) => ({
  stripeInitializeRequest: ()=> dispatch(stripeInitializeRequest())
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultState,
  defaultProps,
)(Render);