import React from 'react';
import EntityCore from '../EntityCore'
import EntityCoreSearchMap from '../EntityCoreSearchMap'

export default props => !props.collection === 'organizations' ? null :
<div>
<EntityCoreSearchMap
  collection={props.collection}
  entity={props.entity}
/>
<EntityCore
  collection={props.collection}
  entity={props.entity}
  foundryProfile='OrganizationProfileEntry'
  formExtend='OrganizationAdd'
/>
</div>