/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route } from 'react-router-dom';
/* ------------------------- External Dependencies -------------------------- */
import Box from 'atoms/Box'
import Absolute from 'atoms/Absolute'
import Flex from 'atoms/Flex'
import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'
import {
  ArticleAdd,
  ArticleAddFullDescription,
  ArticleSearch,
  
  EventAdd,
  EventAddFullDescription,
  EventSearch,

  ProjectAdd,
  ProjectAddFullDescription,
  ProjectSearch,

  ResourceAdd,
  ResourceAddFullDescription,
  ResourceSearch,

  OrganizationAdd,
  OrganizationAddFullDescription,
  OrganizationSearch,

  PersonAdd,
  PersonAddFullDescription,
  PersonSearch,

  ProductAdd,
  ProductAddFullDescription,
  ProductSearch,
} from 'entity'
/* ------------------------------- Component -------------------------------- */

export default () => (
<div>
   {/* People */}
  <Route exact path="/dashboard/people/manage" component={PersonSearch} />
  <Route exact path="/dashboard/people" component={PersonAdd} />
  <Route exact path="/dashboard/person/add" component={PersonAddFullDescription} />
  {/*Projects | Multiple */}
  <Route exact path="/dashboard/projects/manage" component={ProjectSearch} />
  <Route exact path="/dashboard/projects" component={ProjectAdd} />
  <Route exact path="/dashboard/project/add" component={ProjectAddFullDescription} />

  {/*Resource */}
  <Route exact path="/dashboard/resources/manage" component={ResourceSearch} />
  <Route exact path="/dashboard/resources" component={ResourceAdd}/>
  <Route exact path="/dashboard/resource/add" component={ResourceAddFullDescription} />
  {/*Organization */}
  <Route exact path="/dashboard/organizations/manage" component={OrganizationSearch} />
  <Route exact path="/dashboard/organizations" component={OrganizationAdd} />
  <Route exact path="/dashboard/organization/add" component={OrganizationAddFullDescription} />
</div>);
