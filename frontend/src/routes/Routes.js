import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Dummy from '../components/Dummy';
import Dashboard from '../containers/Dashboard';
import Issue from '../containers/Issue';
import { Login } from '../components/Login';
import { Logout } from '../components/Logout';
import { Register } from '../components/Register';
import { Forgot } from '../components/Forgot';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


//const auth = false;

class routes extends Component {

  componentWillMount() {
    if (localStorage.getItem("user")) { // user was logged in....

      this.props.login();

    }


  }

  render() {
	return (
		<Switch>

			<Route exact path="/" component={Dummy} />
			<NonAuthRoute path="/login" user={this.props.user} component={Login} pathname={ "/dashboard" } />
			<NonAuthRoute path="/register" user={this.props.user} component={Register} pathname={ "/dashboard" } />
			<NonAuthRoute path="/forgot" user={this.props.user} component={Forgot} pathname={ "/dashboard" } />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/issue" component={Issue} />
			<AuthRoute path="/admin" component={Dummy} pathname={ "/login" } />
			<AuthRoute path="/newissue" component={Dummy} pathname={ "/login" } />
			<Route path="/logout" component={Logout} />
			<AuthRoute path="/admin" user={this.props.user} component={Dummy} pathname={ "/login" } />
			<AuthRoute path="/newissue" user={this.props.user} component={Dummy} pathname={ "/login" } />
			<Route path="*" component={NotFound} />

		</Switch>
	);
  }

};


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
  }
}

const mapDispatchToProps = dispatch => {
  return {
   login: () => dispatch({ type: "LOGIN" }),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(routes));
