/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
import {injectStripe} from 'react-stripe-elements';
/* ------------------------- Internal Dependencies -------------------------- */
import { Item } from 'foundry'
import { 
  fromStripe,
  fromFirestore,
  fromAuthentication,
} from 'store/departments/selectors'

import {
  stripeInitializeRequest,
  stripeTokenCreateRequest,
  entityAddRequest,
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
    statusStripe: fromStripe.getStatus(state)
  }
}
const mapDispatchToProps = (dispatch, props) => ({
  createToken: ()=> {
    props.stripe.createToken({name: 'Kames Cox-Geraghty'}).then(({token}) => {
      dispatch(entityAddRequest({
        payload: {
          createdBy: props.eid,
          eid: props.eid,
          token
        }, 
        metadata: {
        branch: [
          'commerceTokens'
        ],
          delta: 'CommerceTokenAdd',
        }
      }))

    });
  }
})

export default compose(
  injectStripe,
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultState,
  defaultProps,
)(Render);