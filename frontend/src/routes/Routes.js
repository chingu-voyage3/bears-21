import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Dummy from '../components/Dummy';
import Dashboard from '../containers/Dashboard';
import Issue from '../containers/Issue';

const auth = false;

export default () => {
	return (
		<Switch>

			<Route exact path="/" component={Dummy} />
			<Route path="/login" component={Dummy} />
			<Route path="/register" component={Dummy} />
			<Route path="/forgot" component={Dummy} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/issue" component={Issue} />
			<AuthRoute path="/admin" component={Dummy} pathname={ "/login" } />
			<AuthRoute path="/newissue" component={Dummy} pathname={ "/login" } />
			<Route path="*" component={NotFound} />

		</Switch>
	);
	// <AuthRoute path="/dashboard" component={Dashboard} pathname={ "/login" } />
};

const AuthRoute = ({ component: Component, pathname: path, ...rest }) => (
	<Route {...rest} render={ props => (
		auth ? (
			<Component {...props} />
		) : (
			<Redirect
				to={{ pathname: path }}
			/>


		))} />




);
