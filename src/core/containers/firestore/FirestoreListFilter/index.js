/**
 * @func FireStoreListFilter
 * @desc The FireStoreListCompose Container composes a list of Document searches 
 * into a single sharable state filter.
 * 
 * @func mapStateToProps()
 * @var {String} props.collection - Firestore "collection" Reference
 * @var {String} props.delta - Redux Store Identifier
 * @var {Array} props.references - Entity ID List
 * @var {String} props.foundry - Render Component
 */
/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import ItemList from 'workshop/core/ItemList'
import {fromFirestore} from 'store/departments/selectors'
import {firestoreDocumentComposeGetRequest} from 'store/departments/actions'
/* ---------------------------- Module Package ------------------------------ */
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
    if(prevProps.status !== this.props.status)
    {
  
    }
  }
  /*--- Did Update | End ---*/

})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => {
  const { delta } = props
  const references = fromFirestore.getQueryComposeReferences(state, delta)
  const data = !references ? null : fromFirestore.getQueryComposeData(state, references)
  return (
    {
      data
    }
  )
}

const mapDispatchToProps = (dispatch, props) => ({

})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(ItemList);
