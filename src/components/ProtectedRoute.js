import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { detectAuthUser } from '../actions/authUser';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            return detectAuthUser((isAuth) => {
                return isAuth ?
                    <Component {...props} />
                    : <Redirect to='/login' />
            })
        }} />
    );
}

export default PrivateRoute;