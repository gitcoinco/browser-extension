/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, renderComponent, withHandlers, mapProps, withProps, withState } from 'recompose'
import Dimensions from 'react-dimensions'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
/*--- Redux ---*/
import { firestoreDocumentFilterGetRequest } from 'store/departments/actions'
import { fromFirestore } from 'store/departments/selectors'
/*--- Map ---*/
import {defaultMapStyle, dataLayer} from 'static/maps/style/StyleSimple';
/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const viewportState = withState(
  'viewport', 'setViewport', {
    latitude: 43.648972,
    longitude: -79.371955,
    zoom: 2,
    bearing: 0,
    pitch: 0,
  }
)
const defaultProps = withProps(props=>{
  const entity = props.entity ? props.entity.charAt(0).toUpperCase() + props.entity.slice(1) : ""
  return{
    delta: props.delta,
    collection: props.collection,
    foundry:props.foundry || `${entity}MarkerPopover`,
    mapStyle: defaultMapStyle,
    menu: props.menu,
    hoveredFeature: null,
}})

const eventHandlers = withHandlers({
  onViewportChange: ({setViewport})=> props => setViewport(props),
})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle(
{
  /*--- Component Mount | BEGIN ---*/
  componentDidMount()
  {
   if(this.props.collection && this.props.delta)
    {
      this.props.firestoreDocumentFilterGetRequest({
        metadata:{
          branch: [this.props.collection],
          delta: this.props.delta,
          filters: this.props.filters
        }
      })
    }
  },
  /*--- Component Mount | END ---*/

  /*--- Did Update | BEGIN ---*/
  componentDidUpdate(prevProps)
  {
    if(prevProps.queryData !== this.props.queryData ) {
      this.setState({
        data: this.props.queryData
      })
    }
  },
  /*--- Did Update | End ---*/

  /*--- Will Mount | BEGIN ---*/
  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }
  /*--- Will Mount | End ---*/

})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => ({
  data: fromFirestore.getQueryData(state, props.delta)
})
const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentFilterGetRequest: request=> dispatch(firestoreDocumentFilterGetRequest(request))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultProps,
  viewportState,
  eventHandlers,
)(Render);
