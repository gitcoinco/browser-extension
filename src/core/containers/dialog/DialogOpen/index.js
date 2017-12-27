/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { dialogOpen } from 'store/departments/actions'

const mapDispatchToProps = (dispatch, props) => ({
  dialogOpen: () => dispatch(dialogOpen({payload:{...props}}))
})

export default connect(null, mapDispatchToProps)(Render);
