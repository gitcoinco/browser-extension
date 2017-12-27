/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { dialogClose } from 'store/departments/actions'

function mapStateToProps(state) {
  const { dialog } = state
  return {
    dialog
  };
}

const mapDispatchToProps = dispatch => ({
  dialogClose: () => dispatch(dialogClose())
})
export default connect(mapStateToProps, mapDispatchToProps)(Render);
