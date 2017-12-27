import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'atomic' 
import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'
import {
  MapAdvancedCompose,
  UserProfileDashboard,
  PrimeDataTable,
  DataTable,
  DataCalendar,
  FormAddContributorPerson,
  FormHotlineAddPerson,
 } from 'foundry'

import {
  ArticleAddFull,
  OrganizationAddFull,
  PersonAddFull,
  ProjectAddFull,
  ResourceAddFull,
} from 'entity'

export default props => !props.collection === 'people' ? null :
<div>
{/*--- Person
    + Top (people) 
    - people/map => MapAdvancedCompose
    - people => MapAdvancedCompose
    - people => FirestoreList
    + Switch (person)
      - person/add => PersonAddFull
      - person => FirestoreDocument
  ---*/}
  <Route exact path="/dashboard/people/map" component={MapAdvancedCompose}
  delta='PersonSearch' 
    collection='people' 
    foundry='PersonMarkerPopover'
    styledMap={{h:[320,420,660]}} 
   />
  <Route exact path="/dashboard/people" component={MapAdvancedCompose} 
    delta='PersonSearch' 
    collection='people' 
    foundry='PersonMarkerPopover'
    styledMap={{h:[200,280,360]}} 
  />
  <Route exact path="/dashboard/people" component={FirestoreList} 
    collection='people'
    delta='PersonSearch'
    entity='person'
    foundry='PersonCardDashboard'
    styled={{
      w: [1, 1, 0.5],
    }}
  />
  <Switch>
    <Route 
      exact
      path="/dashboard/person/add" 
      component={PersonAddFull}
    />
    <Route
      path="/dashboard/person/:eid"
      component={FirestoreDocument}
      collection="people"
      entity="person"
      foundry={'PersonProfileEntry'}
      {...props}
     />
  </Switch>
</div>