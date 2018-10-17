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
  render() {
    return (
      <Switch>
        <NonAuthRoute path="/login" component={Login} pathname={ "/dashboard" } />
        <NonAuthRoute path="/register" component={Register} pathname={ "/dashboard" } />
        <NonAuthRoute path="/forgot" component={Forgot} pathname={ "/dashboard" } />
        <AuthRoute path='/profile/:id?' component={Profile} pathname={"/login"} />
        <AuthRoute path="/dashboard" component={Dashboard} pathname={"/login"} />
        <AuthRoute path="/admin" component={Dummy} pathname={"/login"} />
        <AuthRoute path="/issue/:id" component={Issue} pathname={"/login"} />
        <AuthRoute path="/house/:id" component={HouseDetailEdit} pathname={"/login"} />
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

export default withRouter(connect(mapStateToProps, null)(Routes));
