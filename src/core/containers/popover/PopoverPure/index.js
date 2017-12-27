/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
/* ---------------------------- Module Package ------------------------------ */
import { popoverOpen, popoverClose } from 'store/departments/actions'
import { fromPopover } from 'store/departments/selectors'
/* ---------------------------- Module Package ------------------------------ */

/*---*--- Recompose ---*---*/
const stateToggle = withState(
  'openNow',
  'togglePopover',
  false
)
const defaultProps = withProps({

})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(prevProps != this.props) {
      this.setState({
        openNow: false
      })
    }
  }
})


/*---*--- Redux ---*---*/
function mapStateToProps(state, props) {
  const isOpen = fromPopover.getPopoverStatus(state, props.delta)
  return {
    isOpen
  };
}

const mapDispatchToProps = (dispatch, props) => ({
  popoverOpen: (id) => dispatch(popoverOpen({payload:{delta: props.delta }})),
  popoverClose: (id) => dispatch(popoverClose({payload:{delta: props.delta }}))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  stateToggle,
  defaultProps,
)(Render);
