/**
 * @func FireStoreListCompose
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
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import List from 'workshop/core/List'
import {fromFirestore} from 'store/departments/selectors'
import {firestoreDocumentComposeGetRequest} from 'store/departments/actions'
/* ---------------------------- Module Package ------------------------------ */
/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle(
{
  /*--- Did Mount | BEGIN ---*/
  componentDidMount()
  {
    switch(this.props.status) {
      case(null):
        this.props.firestoreDocumentComposeGetRequest({
          metadata: {
            branch: [
              this.props.collection
            ],
            delta: this.props.delta,
            references: this.props.references
          }
        })
        break;
      case(true):
        this.setState({
          data: {
            ...this.props.data
          }
        })
        break;
      case(false):
        this.setState({
          error: true,
          status: 'Failure: Unable to retreive requested data',
        })
        break;
      default:
      this.props.firestoreDocumentComposeGetRequest({
          metadata: {
            branch: [
              this.props.collection
            ],
            delta: this.props.delta,
            references: this.props.references
          }
        })
    }
  },
  /*--- Did Mount | END ---*/

  /*--- Did Update | BEGIN ---*/
  componentDidUpdate(prevProps)
  {
    if(prevProps.status !== this.props.status ) {
    switch(this.props.status) {
      case(null):
        this.props.firestoreDocumentComposeGetRequest({
          metadata: {
            branch: [
              this.props.collection
            ],
            delta: this.props.delta,
            references: this.props.references
          }
        })
        break;
      case(true):
        this.setState({
          data: {
            ...this.props.data
          }
        })
        break;
      case(false):
        this.setState({
          error: true,
          status: 'Failure: Unable to retreive requested data',
        })
        break;
    }
  }
  }
  /*--- Did Update | End ---*/

})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => {
  const { delta, references } = props
  const status = fromFirestore.getQueryComposeStatus(state, delta)
  const data = !status ? null : fromFirestore.getQueryComposeData(state, references)
  return (
    {
      status,
      data
    }
  )
}

const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentComposeGetRequest: (settings)=>dispatch(firestoreDocumentComposeGetRequest(settings))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(List);
