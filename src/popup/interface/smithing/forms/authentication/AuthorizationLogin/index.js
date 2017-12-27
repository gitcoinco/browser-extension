/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { authLoginWithAuthorization } from 'store/departments/actions'

function mapStateToProps(state) {
  const { data } = state
  return {};
} 

const mapDispatchToProps = dispatch => ({
  authLogin: () => dispatch(authLoginWithAuthorization({})),
})

export default connect(mapStateToProps, mapDispatchToProps)(Render);
