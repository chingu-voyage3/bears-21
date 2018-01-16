import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Dummy from '../components/Dummy';
import Dashboard from '../containers/Dashboard';
import SearchLayout from "../containers/Search";
import Issue from '../containers/Issue';
import House from '../containers/House';
import { Login } from '../components/Login';
import { Logout } from '../components/Logout';
import { Register } from '../components/Register';
import { Forgot } from '../components/Forgot';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class routes extends Component {

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
        <Route path="*" component={NotFound} />
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
