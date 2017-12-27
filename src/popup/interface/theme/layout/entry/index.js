/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import LayoutDashboardRender from './render';

/* ------------------------ Initialize Dependencies ------------------------- */
import { getZones } from 'extensionStore/departments/theme/selectors'

/* -------------------------- Container Methods ----------------------------- */
function mapStateToProps(state) {
  const { header, sidebar, footer, main, zones, regions } = getZones(state)

  return {
    header, footer, main, zones, regions
  };
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(LayoutDashboardRender);
