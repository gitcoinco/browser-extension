import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Absolute, Route } from 'atomic' 
import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'
import {
  EntityAddFull,
} from 'entity'

const EntityCoreSearch = props => !props.collection ? null :
<div>
  <Absolute top bottom left right >
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
  component={EntityCoreSearch} 
  {...props}
/>