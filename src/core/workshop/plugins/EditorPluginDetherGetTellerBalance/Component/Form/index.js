import React from 'react'
import Box from 'atoms/Box'
import Toolbar from './Toolbar'
import Drawer from './Drawer'
import Display from '../Display'

export default props => 
<Box>
  <Drawer {...props} />
  <Toolbar {...props} />
  <Display {...props} />
</Box>