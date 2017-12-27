import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Switch } from 'react-router-dom';
import { Absolute, Route } from 'atomic' 
import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'
import {
  MapAdvancedCompose,
  FormAddContributorPerson,
 } from 'foundry'
import {
  EntityAddFull,
} from 'entity'

const EntityCoreSearchMap = props => !props.collection ? null :
<div>
  <Route 
    exact
    path={`/dashboard/${props.collection}/map`} 
    component={MapAdvancedCompose}
    collection={props.collection}
    delta={`${props.entity}Search`}
    foundry='EntityMarkerPopover'
    menu={props.entity}
    
    styledMap={{h:[320,420,600]}} 
   />

   <Route 
      exact
      path={`/dashboard/${props.collection}`} 
      component={MapAdvancedCompose} 
      collection={props.collection}
      delta={`${props.entity}Search`}
      foundry='EntityMarkerPopover'
      menu={props.entity}
      styledMap={{h:[200,280,300]}} 
    />
  <Absolute top bottom left right mt={[200,280,300]} >
   <PerfectScrollbar>
      <Route 
        exact 
        path={`/dashboard/${props.collection}`} 
        component={FirestoreList} 
        collection={props.collection}
        delta={`${props.entity}Search`}
        entity={props.entity}
        foundry='EntityCardHorizontalDashboard'
        styled={{
          w: [1],
        }}
      />
   </PerfectScrollbar>
  </Absolute>
</div>


export default props => !props.collection ? null :
<Route 
  path={`/dashboard/${props.collection}`} 
  component={EntityCoreSearchMap} 
  {...props}
/>