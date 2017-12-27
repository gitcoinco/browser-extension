/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react'
import { connect } from 'react-redux';
import {
  branch,
  compose,
  lifecycle,
  withProps,
  withState,
  renderComponent
} from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { fromDatabase } from 'store/departments/selectors'
import { databaseWriteRequest, databaseReadRequest } from 'store/departments/actions'
import PageRender from 'foundry/editor/PageRender'
import 'ory-editor-ui/lib/index.css'
import 'ory-editor-plugins-html5-video/lib/index.css'
import 'ory-editor-plugins-image/lib/index.css'
import 'ory-editor-plugins-parallax-background/lib/index.css'
import 'ory-editor-plugins-slate/lib/index.css'
import 'ory-editor-plugins-spacer/lib/index.css'
import 'ory-editor-plugins-video/lib/index.css'
/* ------------------------------- Container -------------------------------- */
const mapStateToProps = (state, props) => ({
    content: JSON.parse(fromDatabase.getDeltaData(state, 
      idx(props, _=> _.match.params.alias) 
        ? props.match.params.alias
        : props.delta 
      )),
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  databaseReadRequest: (settings)=>dispatch(databaseReadRequest(settings)),
})

const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {
    const alias = idx(this.props, _=> _.match.params.alias)
    const metadata = {
      branch: [
        'content', 
        alias ? alias : this.props.delta
      ],
      delta: alias ? alias : this.props.delta,
    }
    this.props.databaseReadRequest({metadata: metadata})
  },
  componentDidUpdate(prevProps)
  {
    const prevAlias = idx(prevProps,_=>_.match.params.alias) 
    const currentAlias = idx(this.props, _=>_.match.params.alias)
    if(prevAlias != currentAlias && currentAlias != null ) {
      const alias = idx(this.props, _=> _.match.params.alias)
      const metadata = {
        branch: [
          'content', 
          alias ? alias : this.props.delta
        ],
        delta: alias ? alias : this.props.delta,
      }
      
      this.props.databaseReadRequest({metadata: metadata})
    }
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(PageRender);
