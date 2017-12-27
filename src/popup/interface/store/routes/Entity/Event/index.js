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
import EntityCore from '../EntityCore'
import EntityCoreSearchCalendar from '../EntityCoreSearchCalendar'
export default props => !props.collection === 'events' ? null :

<div>
  <EntityCoreSearchCalendar
    collection={props.collection}
    entity={props.entity}
  />
  <EntityCore
    collection={props.collection}
    entity={props.entity}
    foundryProfile='EventProfileEntry'
    formExtend='EventAdd'
  />
</div>