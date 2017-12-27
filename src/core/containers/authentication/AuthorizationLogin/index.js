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

const mapDispatchToProps = (dispatch, props) => ({
  authLogin: () => dispatch(authLoginWithAuthorization({
    metadata: {
      providerSelection: props.providerSelection
    }
  })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Render);
