import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Notfound from '../Errors/Notfound';
import { Dummy } from '../Dummy';
import Dashboard from '../Dashboard';
import SearchLayout from "../Search";
import Issue from '../Issue';
import House from '../House';
import { Login } from '../Login';
import { Logout } from '../Logout';
import { Register } from '../Register';
import { Forgot } from '../Forgot';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class routes extends Component {
  static propTypes = {
    user: PropTypes.bool,
    login: PropTypes.func.isRequired
  };
  componentWillMount() {
    if (localStorage.getItem("user")) { // user was logged in....
      this.props.login();
    }
  }

  render() {
    const {user} = this.props;
    return (
      <Switch>
        <NonAuthRoute path="/login" user={user} component={Login} pathname={ "/dashboard" } />
        <NonAuthRoute path="/register" user={user} component={Register} pathname={ "/dashboard" } />
        <NonAuthRoute path="/forgot" user={user} component={Forgot} pathname={ "/dashboard" } />
        <AuthRoute path="/dashboard" user={user} component={Dashboard} pathname={ "/login"} />
        <AuthRoute path="/admin" component={Dummy} pathname={ "/login" } />
        <AuthRoute path="/issue/:id" user={user} component={Issue} pathname={"/login"} />
        <Route path="/newissue" component={Dummy} />
        <AuthRoute path="/house/:id" user={user} component={House} pathname={"/login"} />
        <Route path="/logout" component={Logout} />
        <Route path="/" component={SearchLayout} />
        <Route path="*" component={Notfound} />
      </Switch>
    );
  }
}

const AuthRoute = ({ user: auth, component: Component, pathname: path, ...rest }) => (
  <Route {...rest} render={ props => (
    auth ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{ pathname: path }}
      />
    ))} />
);
AuthRoute.propTypes = {
  user: PropTypes.bool,
  component: PropTypes.func,
  pathname: PropTypes.string
};

const NonAuthRoute = ({ user: auth, component: Component, pathname: path, ...rest }) => (
  <Route {...rest} render={ props => (
    !auth ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{ pathname: path }}
      />
    ))} />
);
NonAuthRoute.propTypes = {
  user: PropTypes.bool,
  component: PropTypes.func,
  pathname: PropTypes.string
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
   login: () => dispatch({ type: "LOGIN" }),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(routes));