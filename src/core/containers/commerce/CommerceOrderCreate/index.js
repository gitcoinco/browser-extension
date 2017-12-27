/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { List } from 'foundry'
import { Button, Span } from 'atomic'
import { fromAuthentication, fromFirestore } from 'store/departments/selectors'
import { 
  firestoreDocumentAddRequest
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
  return {commerceOrderCreate: props =>{
    return dispatch(
    firestoreDocumentAddRequest({
      payload: {
        createdBy: props.uid, /* Firestore BUG (https://stackoverflow.com/questions/46674372/firestore-security-rules-based-on-map-values) */
        created: {
          createdBy: props.uid,
        },
        items: props.cart.items,
        relationships: [
          {
            branch: ['carts'],
            ref: props.cart.eid,
          }
        ],
        status: 'initialized'
      },
      metadata: {
        branch: [
          'orders'
        ],
        delta: 'CommerceOrderCreate'
      }
    })
  )}
}}

const CommerceOrderCreateRequest = props => <Span onClick={()=>props.commerceOrderCreate(props)} {...props}/>
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(CommerceOrderCreateRequest);