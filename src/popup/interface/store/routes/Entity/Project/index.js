import React from 'react';
import EntityCore from '../EntityCore'
import EntityCoreSearchMap from '../EntityCoreSearchMap'
import ProjectProfileEntry from 'smithing/project/ProjectProfileEntry'
import { Route } from 'atomic' 
import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'
export default props => !props.collection === 'projects' ? null :
<div>
  <Route exact path="/dashboard/projects" component={FirestoreList} 
    collection='projects'
    delta='ProjectSearch'
    entity='project'
    foundry='EntityCardDashboard'
    styled={{
      w: [1, 1, 0.5],
    }}
  />

<EntityCore
  collection={props.collection}
  entity={props.entity}
  foundryProfile={ProjectProfileEntry}
  formExtend='ProjectAdd'
/>
</div>