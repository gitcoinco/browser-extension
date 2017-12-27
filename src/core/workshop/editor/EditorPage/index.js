/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  withProps,
  withState,
} from 'recompose'
import { createEmptyState } from 'ory-editor-core'
import { ContentPlugin, LayoutPlugin } from "ory-editor-core/lib/service/plugin/classes"

/* ------------------------- Internal Dependencies -------------------------- */
import EditorWrapper from 'foundry/editor/EditorWrapper'
import { fromDatabase } from 'store/departments/selectors'
import { 
  databaseWriteRequest,
  databaseReadRequest,
 } from 'store/departments/actions'

/*-* Editor *-*/
import Component from './Component'
import EditorPlugins from 'foundry/editor/EditorPlugins'
import PluginService from 'ory-editor-core/lib/service/plugin'
import PluginWhitelist from 'static/editor/plugins'
const plugins = new PluginService(EditorPlugins)

/* ------------------------------- Container -------------------------------- */
const mapStateToProps = (state, props) => 
({
  content: JSON.parse(fromDatabase.getDeltaData(state, props.match.params.alias)),
  status: fromDatabase.getDeltaStatus(state, props.match.params.alias)
})

const mapDispatchToProps = (dispatch, props) => 
({
databaseWriteRequest: (editable, alias)=>dispatch(databaseWriteRequest({
    payload: JSON.stringify(editable),
    metadata: {
      branch: ['content', alias],
      delta: 'dataWrite',
      writeType: 'update'
    }
  })),
databaseReadRequest: (settings)=>dispatch(databaseReadRequest(settings)),
})

const QueryLifecycle = lifecycle(
{
  componentWillUnmount() {
    this.props.initComplete(n=>false)
  },
  componentDidMount()
  { 
    this.props.editableRef(n=>this.props.match.params.alias)
    const metadata = {
      branch: ['content', this.props.match.params.alias],
      delta: this.props.match.params.alias,
    }
    this.props.databaseReadRequest({metadata: metadata})
  },
  componentDidUpdate(prevProps)
  {
    // Initialize Blank Editor State from Delta after changing Pages
    if(prevProps.match.params.alias && this.props.match.params.alias != prevProps.match.params.alias) {
      const metadata = {
        branch: ['content', this.props.match.params.alias],
        delta: this.props.match.params.alias,
      }
      this.props.databaseReadRequest({metadata: metadata})
      this.props.initComplete(n=>!n)
    }
    // Hydrate Editor State from Database
    if(!this.props.initialized && this.props.content && this.props.status ) {
      const contentHydrated = plugins.unserialize(this.props.content) // Unserialize content from Database
      contentHydrated.config = { whitelist: PluginWhitelist } // Set Available Plugins
      EditorWrapper.trigger.editable.add(contentHydrated)
      this.props.initComplete(n=>!n)
    }
    // Blank Editor State from Delta (/editor/:alias)
    if(!this.props.initialized && !this.props.content && this.props.status === true ) {
      const content = createEmptyState()
      content.id = this.props.match.params.alias // Set Page ID from Path Alias
      content.config = { whitelist: PluginWhitelist } // Set Available Plugins
      EditorWrapper.trigger.editable.add(content)   
      this.props.initComplete(n=>!n)
    }
    // Save Page to Backend 
    if(this.props.contentSave) {
      this.props.databaseWriteRequest(this.props.contentStorage, this.props.match.params.alias)
      this.props.contentSaveUpdate(n=>!n)
    }
  }
})

const Initialize = withState(
  'initialized',
  'initComplete',
  false
)
const EditContent = withState(
  'editableId',
  'editableRef',
  null
)
const ContentSave = withState(
  'contentSave',
  'contentSaveUpdate',
  false
)
const ContentStorage = withState(
  'contentStorage',
  'contentStorageUpdate',
  {}
)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  EditContent,
  Initialize,
  ContentStorage,
  ContentSave,
  QueryLifecycle,
)(Component);
