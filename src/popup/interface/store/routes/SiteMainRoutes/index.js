/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch } from 'react-router'
import Route from 'molecules/Route' 
import SearchGlobal from 'smithing/forms/search/SearchGlobal'
import BlockOrganizations from 'smithing/blocks/BlockOrganizations'
import BlockBounties from 'smithing/blocks/BlockBounties'
import BountySearch from 'containers/bounty/BountySearch'
import BountyItem from 'containers/bounty/BountyItem'
/* ------------------------- External Dependencies -------------------------- */
const Landing = props=>
<div>
  <SearchGlobal/>
  <BountySearch/>
</div>
export default () =>
<Switch>

  <Route exact path="/" component={Landing} />
  <Route path="/bounty/:uid" component={BountyItem} />
</Switch>