/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import List from 'workshop/core/List'
import DataTable from 'workshop/data/DataTable'
import { fromFirestore } from 'store/departments/selectors'
import { firestoreDocumentFilterGetRequest } from 'store/departments/actions'
/* ---------------------------- Module Package ------------------------------ */
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    if(this.props.collection && this.props.delta)
    {
      this.props.firestoreDocumentFilterGetRequest({
        metadata:{
          branch: [this.props.collection],
          delta: this.props.delta,
          filters: this.props.filters
        }
      })
    }
  }
})

const mapStateToProps = (state, props) => {
  const data = fromFirestore.getQueryData(state, props.delta)
  if (!data) return null
  return {
    dataFeed: data.map(item=>({id:item.id, ...item.data}))
  }
}


const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentFilterGetRequest: (settings)=>dispatch(firestoreDocumentFilterGetRequest(settings)),
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(DataTable);
