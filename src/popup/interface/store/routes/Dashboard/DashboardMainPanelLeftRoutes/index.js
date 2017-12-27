/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route } from 'react-router-dom';
/* ------------------------- External Dependencies -------------------------- */
import Box from 'atoms/Box'
import Absolute from 'atoms/Absolute'
import Flex from 'atoms/Flex'
import { 
  ArticleSearch,
  EventSearch,
  ProjectSearch,
  PersonSearch,
  ProductSearch,
  ResourceSearch,
  OrganizationSearch,
} from 'entity'

 const Demo = props => <Box p={20}>Hello Deals</Box>
 const DemoOrganizations = props => <Box p={20}>Left Panel</Box>
/* ------------------------------- Component -------------------------------- */

export default () => (
<div>
  <Route exact
    path="/dashboard/people" 
    component={PersonSearch} 
    collection="people"
    entity="person"
  />
  <Route
    exact
    path="/dashboard/projects" 
    component={ProjectSearch} 
    collection="projects"
    entity="project"
  />
  <Route
    exact
    path="/dashboard/organizations"
    component={OrganizationSearch}
    collection="organizations"
    entity="organization"
    />
  <Route 
    exact 
    path="/dashboard/resources"
    component={ResourceSearch} 
    collection="resources"
    entity="resource"
  />
</div>);
