import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

const AuthRoute = ({ user: auth, component: Component, pathname: path, ...rest }) => (
  <Route {...rest} render={ props => (
    auth ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{ pathname: path }}
      />
    )
  )} />
);

AuthRoute.propTypes = {
  user: PropTypes.bool,
  component: PropTypes.func,
  pathname: PropTypes.string
};

export default AuthRoute;