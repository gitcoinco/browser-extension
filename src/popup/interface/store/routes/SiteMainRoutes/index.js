/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'molecules/Route' 
import FirestoreList from 'containers/firestore/FirestoreList'
/* ------------------------- External Dependencies -------------------------- */
import Front from 'smithing/pages/main/Front'
export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={FirestoreList} 
        collection='projects'
        delta='ProjectSearch'
        entity='project'
        foundry={'CardRealEstate'}
        styled={{
          w: [1],
        }}
      />
    </Switch>
  </div>);
