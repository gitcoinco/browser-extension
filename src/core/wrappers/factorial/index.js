/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { Item } from 'foundry'
import factorial from 'assembly/cryptonote/factorial.wasm'
/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultState = withState(
  'data',
  'setData',
  0
)
const defaultProps = withProps({

})

function fetchAndInstantiate(url, importObject) {
  return fetch(url).then(response =>
    response.arrayBuffer()
  ).then(bytes =>
    window.WebAssembly.instantiate(bytes, importObject)
  ).then(results =>
    results.instance
  );
}

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle(
{
  /*--- Did Mount | BEGIN ---*/
  componentDidMount()
  {

    const self = this
    fetchAndInstantiate(factorial, {}).then(function(instance) {
      const instanceExports = instance.exports
      const factorial = instance.exports._Z4facti;
      self.props.setData(()=>factorial(12))
    })

  },
  /*--- Did Mount | END ---*/

  /*--- Did Update | BEGIN ---*/
  componentDidUpdate(prevProps)
  {


  }
  /*--- Did Update | End ---*/

})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => {

  return {
    
  }
}
const mapDispatchToProps = (dispatch, props) => ({

})

const Factorial = props => !props.data ? null : <span>WebAssembly Factorial {props.data}</span>

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  defaultState,
  queryLifecycle,
  defaultProps,
)(Factorial);
