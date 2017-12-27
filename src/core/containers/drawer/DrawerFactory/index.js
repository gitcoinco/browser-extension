/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { drawerClose } from 'store/departments/actions'

function mapStateToProps(state) {
  const drawer = state.drawer.drawer
  return {
    drawer
  };
}

const mapDispatchToProps = dispatch => ({
  drawerClose: () => dispatch(drawerClose())
})
export default connect(mapStateToProps, mapDispatchToProps)(Render);
