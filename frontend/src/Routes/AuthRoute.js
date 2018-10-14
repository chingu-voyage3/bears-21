import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { autoLogin } from '../User/userActions';


const AuthRoute = ({ user, component: Component, pathname: path, ...rest }) => (
  <Route {...rest} render={ props => (
    user ? (
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