/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { List } from 'foundry'
import { Button, Span } from 'atomic'
import { fromAuthentication, fromFirestore } from 'store/departments/selectors'
import { 
  firestoreDocumentUpdateRequest
} from 'store/departments/actions'
/* ---------------------------- Module Package ------------------------------ */
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {

  }
})

const mapStateToProps = (state, props) => ({
  cart: fromFirestore.getQueryData(state, 'CartActive', 0),
  uid: fromAuthentication.getUserId(state)
})

const mapDispatchToProps = (dispatch, props) => {
  
  return {commerceOrderConfirm: props =>{
    return dispatch(
    firestoreDocumentUpdateRequest({
      payload: {
        status: 'confirmed'
      },
      metadata: {
        branch: [
          'orders',
          props.id
        ],
        delta: 'commerceOrderConfirm'
      }
    })
  )}
}}

const commerceOrderConfirmRequest = props => <Span onClick={()=>props.commerceOrderConfirm(props)} {...props}/>
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(commerceOrderConfirmRequest);