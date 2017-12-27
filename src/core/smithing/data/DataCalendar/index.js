/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, withStateHandlers, renderComponent } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultState = withState({

})
const defaultProps = withProps({
  culture: 'es',
  cultures: ['en', 'en-GB', 'es', 'fr', 'ar-AE'],
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

const initialState = withStateHandlers(
    ({ data = [], selectedItems = {} }) => ({
      selectedItems
    }),
    {
      cultureChange: ({ counter }) => (e) => ({
        culture: e.target.value
      }),
    }
  )

/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => {

  return {
    
  }
}
const mapDispatchToProps = (dispatch, props) => ({

})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  initialState,
  defaultProps,
)(Render);
