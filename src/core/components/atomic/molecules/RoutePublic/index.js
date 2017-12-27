import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import mergeProps from 'logic/interface/MergeProps';

export default ({ component, authed = false, redirectTo, ...rest }) => {
    return (
        <Route {...rest} render={ routeProps => {
            return authed ? (
                <Redirect to={{
                    pathname: redirectTo,
                    state: { from: routeProps.location }
                }}/>
            ) : (
                mergeProps(component, routeProps, rest)
            );
        }}/>
    );
};
