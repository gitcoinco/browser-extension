/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';
import { compose, lifecycle, withState, withStateHandlers } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './component';
import { bountySearch } from 'store/departments/actions'
import { fromBounty } from 'store/departments/selectors'

/* ---------------------------- Module Package ------------------------------ */

/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => ({
  data: fromBounty.getBountyFilter(state, props.filter)
})
const mapDispatchToProps = (dispatch, props) => ({

})

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle(
{
  /*--- Did Mount ---*/
  componentDidMount()
  {

  },


  /*--- Did Update ---*/
  componentDidUpdate(prevProps)
  {

  }


})

const StateHandlers = withStateHandlers(
  ({ filter = '' }) => ({
    filter,
  }),
  {
    setFilter: () => (e) => ({
      filter:e.target.value,
    }),
    setData: () => (e) => ({
      filter:e.target.value,
    }),
  }
)

export default compose(
  StateHandlers,
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Render);