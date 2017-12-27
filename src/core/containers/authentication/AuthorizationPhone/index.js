/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { authLoginWithPhone } from 'store/departments/actions'

function mapStateToProps(state) {
  const { data } = state
  return {};
} 

const mapDispatchToProps = (dispatch, props) => ({
  authLogin: () => dispatch(authLoginWithPhone({
    payload: {
      phoneNumber: '+14158791469'
    }
  })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Render);
