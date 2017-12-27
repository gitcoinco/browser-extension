import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'atomic' 
import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'
import {
  EntityAddFull,
  FormEntityAddDynamic,
} from 'entity'

export default props => !props.foundryProfile ? null :
<Switch>
  <Route
    exact
    collection={props.collection}

    path={`/dashboard/${props.entity}/add`} 
    component={FormEntityAddDynamic}
    formExtend={props.formExtend}
  />
  <Route 
    path={`/dashboard/${props.entity}/:eid`}
    component={FirestoreDocument}
    collection={props.collection}
    entity={props.entity}
    foundry={props.foundryProfile}
    />
</Switch>