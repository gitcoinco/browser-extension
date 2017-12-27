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

const EntityCoreSearchCalendar = props => !props.collection ? null :
<div>
  <Route 
    exact 
    path={`/dashboard/${props.collection}/calendar`} 
    component={FirestoreFeed} 
    delta={`${props.entity}Search`}
    collection={props.collection}
    foundry='DataCalendar'
    styledContainer={{
      position: 'relative',
      h: [200,280,640],
    }}
  />
  <Route 
    exact 
    path={`/dashboard/${props.collection}`} 
    component={FirestoreFeed} 
    delta={`${props.entity}Search`}
    collection={props.collection}
    foundry='DataCalendar'
    styledContainer={{
      position: 'relative',
      h: [200,280,340],
    }}
  />
  <Absolute top bottom left right mt={[200,280,340]} >
   <PerfectScrollbar>
      <Route 
        exact 
        path={`/dashboard/${props.collection}`} 
        component={FirestoreList} 
        collection={props.collection}
        delta={`${props.entity}Search`}
        entity={props.entity}
        foundry='EntityCardDashboard'
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
  component={EntityCoreSearchCalendar} 
  {...props}
/>