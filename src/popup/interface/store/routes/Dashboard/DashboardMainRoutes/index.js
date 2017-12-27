/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route } from 'react-router-dom';
/* ------------------------- External Dependencies -------------------------- */
// Atoms
import Box from 'atoms/Box'
import Absolute from 'atoms/Absolute'
import Flex from 'atoms/Flex'
// Routes
import RoutesEntityProject from '../../Entity/Project'
/* ------------------------------- Component -------------------------------- */

export default () => (
<div>
  <RoutesEntityProject
    collection={'projects'}
    entity={'project'}
  />
</div>);
