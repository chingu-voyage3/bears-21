import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Dummy from '../components/Dummy';

const auth = false;

const Routes = () => {
	return (	
		<Switch>

			<Route exact path="/" component={Dummy} />
			<Route path="/login" component={Dummy} />
			<Route path="/register" component={Dummy} />
			<Route path="/forgot" component={Dummy} />
			<AuthRoute path="/admin" component={Dummy} pathname={ "/login" } />
			<AuthRoute path="/dashboard" component={Dummy} pathname={ "/login" } />
			<AuthRoute path="/newissue" component={Dummy} pathname={ "/login" } />
			<Route path="*" component={NotFound} />

		</Switch>
	);
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
export default Routes;
