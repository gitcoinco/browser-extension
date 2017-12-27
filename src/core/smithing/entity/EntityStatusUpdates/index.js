/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, mapProps, withProps, withState, renderComponent } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
/* ------------------------ Initialize Dependencies ------------------------- */
import { firestoreDocumentFilterGetRequest } from 'store/departments/actions'

/* ---------------------------- Module Package ------------------------------ */
/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle(
{
  /*--- Did Mount | BEGIN ---*/
  componentDidMount()
  {
    return !this.props.collection ? null :
    this.props.firestoreDocumentFilterGetRequest({
      payload: {},
      metadata:
      {
        branch: [
          this.props.collection,
          this.props.match.params.eid,
          'updates'
        ],
        delta: `${this.props.match.params.eid}|StatusUpdates`,
      }
    })
  },
  /*--- Did Mount | END ---*/

  /*--- Did Update | BEGIN ---*/
  componentDidUpdate(prevProps)
  {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
  /*--- Did Update | End ---*/

})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => ({
  
})
const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentFilterGetRequest: (settings)=>dispatch(firestoreDocumentFilterGetRequest(settings)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(Render);
