import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Dummy from '../components/Dummy';
import Dashboard from '../containers/Dashboard';
import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { Forgot } from '../components/Forgot';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


//const auth = false;

class routes extends Component {


  render() {
	return (
		<Switch>

			<Route exact path="/" component={Dummy} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/forgot" component={Forgot} />
			<Route path="/dashboard" component={Dashboard} />
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

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default withRouter(connect(mapStateToProps)(routes));
