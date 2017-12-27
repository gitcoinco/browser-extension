/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import LayoutDashboardRender from './render';

/* ------------------------ Initialize Dependencies ------------------------- */
import { getZonesDashboard } from 'extensionStore/departments/theme/selectors'


/* -------------------------- Container Methods ----------------------------- */
function mapStateToProps(state) {
  const { header, aside, main, zones, regions } = getZonesDashboard(state)

  return {
    header, aside, main, zones, regions
  };
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(LayoutDashboardRender);
