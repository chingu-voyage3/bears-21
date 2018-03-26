import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';
import Notfound from '../Errors/Notfound';
import { Dummy } from '../Dummy';
import Dashboard from '../Dashboard';
import SearchLayout from "../Search";
import Issue from '../Issue';
import { HouseDetail, HouseDetailEdit} from '../House';
import Profile from '../Profile';
import { Login, Logout, Register, Forgot } from '../User';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Routes extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };
  state = {
    logged_in: false
  };
  componentWillReceiveProps = newProps => {
    let logged_in = false;
    if( newProps.user && newProps.user.name) {
      logged_in = true;
    }
    this.setState( {logged_in})
  };

  render() {
    const user = this.state.logged_in;
    return (
      <Switch>
        <NonAuthRoute path="/login" user={user} component={Login} pathname={ "/dashboard" } />
        <NonAuthRoute path="/register" user={user} component={Register} pathname={ "/dashboard" } />
        <NonAuthRoute path="/forgot" user={user} component={Forgot} pathname={ "/dashboard" } />
        <AuthRoute path='/profile/:id?' user={user} component={Profile} pathname={'/login'} />
        <AuthRoute path="/dashboard" user={user} component={Dashboard} pathname={ "/login"} />
        <AuthRoute path="/admin" component={Dummy} pathname={ "/login" } />
        <AuthRoute path="/issue/:id" user={user} component={Issue} pathname={"/login"} />
        <AuthRoute path="/house/:id" user={user} component={HouseDetailEdit} pathname={"/login"} />
        <Route path="/newissue" component={Dummy} />
        <Route path="/houseview/:id" component={HouseDetail} />
        <Route path="/logout" component={Logout} />
        <Route path="/" component={SearchLayout} />
        <Route path="*" component={Notfound} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
   login: () => dispatch({ type: "LOGIN" }),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
