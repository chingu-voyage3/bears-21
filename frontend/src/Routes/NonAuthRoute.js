import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

const NonAuthRoute = ({ user: auth, component: Component, pathname: path, ...rest }) => (
  <Route {...rest} render={ props => (
    !auth ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{ pathname: path }}
      />
    )
  )} />
);

NonAuthRoute.propTypes = {
  user: PropTypes.bool,
  component: PropTypes.func,
  pathname: PropTypes.string
};

export default NonAuthRoute;