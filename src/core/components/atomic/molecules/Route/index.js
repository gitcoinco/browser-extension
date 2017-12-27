
import React from 'react'
import { Route } from 'react-router-dom'
import mergeProps from 'logic/interface/MergeProps';

export default ({ component, ...rest }) => 
<Route {...rest} render={ routeProps => mergeProps(component, routeProps, rest) }/>
