/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { List } from 'foundry'
import Button from 'atoms/Button'
import Span from 'atoms/Span'
import { fromAuthentication, fromFirestore } from 'store/departments/selectors'
import { 
  firestoreDocumentSetRequest
} from 'store/departments/actions'
/* ---------------------------- Module Package ------------------------------ */
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {

  }
})

const mapStateToProps = (state, props) => ({
  uid: fromAuthentication.getUserId(state)
})

const mapDispatchToProps = (dispatch, props) => {
  return {commerceAddToCart: props =>dispatch(
    firestoreDocumentSetRequest({
      payload: {
        createdBy: props.uid, /* Firestore BUG (https://stackoverflow.com/questions/46674372/firestore-security-rules-based-on-map-values) */
        created: {
          createdBy: props.uid,
        },
        items: {
          [`${props.productId}`]: {
            eid: props.productId,
            count: props.productCount || 1,
          },
        }
      }, 
      metadata: {
        branch: [
          'carts',
          props.uid
        ],
        delta: 'AddToCart',
        merge: true
      }
    })
  )
}}




const CommerceAddToCart = props => <Span onClick={()=>props.commerceAddToCart(props)} {...props}/>

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(CommerceAddToCart);