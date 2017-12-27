/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { authLogout } from 'store/departments/actions'

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user };
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Render);
