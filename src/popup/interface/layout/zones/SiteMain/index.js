/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
/* ------------------------- Internal Dependencies -------------------------- */
import ComponentRender from './render';

/* ----------------------- Redux | State Management  ------------------------ */
import { getZone } from 'extensionStore/departments/theme/selectors'

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */

function mapStateToProps(state) {
  const {layout, regions } = getZone(state, 'main')
  return {
    layout,
    regions
  };
}

const mapDispatchToProps = dispatch => ({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComponentRender));
