import React from 'react'
import { v4 } from 'uuid'
import Remove from 'material-ui/svg-icons/content/remove'
import { BottomToolbar } from 'ory-editor-ui'
import TextField from 'material-ui/TextField'
import {  Flex } from 'atomic'

export default props => 
<Flex
  color='white'
  p={50}
>
{props.children}
  <BottomToolbar open={props.focused}>

    </BottomToolbar>
</Flex>