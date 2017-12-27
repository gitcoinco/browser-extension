/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Block } from 'particles'
import Markdown from 'react-remarkable'
export default props => <Block {...props}><Markdown source={props.source}/></Block>