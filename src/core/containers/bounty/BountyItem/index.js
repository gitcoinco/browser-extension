/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import { connect } from 'react-redux';
import { compose, lifecycle, withState, withStateHandlers } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './component';
import { bountySearch } from 'store/departments/actions'
import { fromBounty } from 'store/departments/selectors'

/* ---------------------------- Module Package ------------------------------ */

/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) =>({
  data: fromBounty.getBounty(state, props.uid)
})

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {
      const uid = idx(this.props, _=>_.match.params.uid)
      if(!uid) return null
      this.props.setUid(uid)
  },

})

const StateHandlers = withStateHandlers(
  () => ({}),
  {
    setUid: () => (value) => ({
      uid:value
    }),
  }
)

export default compose(
  StateHandlers,
  connect(mapStateToProps),
  QueryLifecycle,
)(Render);