/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import ComponentRender from './render';

/* ----------------------- Redux | State Management  ------------------------ */
import { getZoneLayout } from 'extensionStore/departments/theme/selectors'

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */

function mapStateToProps(state) {
  const layout = getZoneLayout(state, 'footer')
  return {layout};
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentRender);
