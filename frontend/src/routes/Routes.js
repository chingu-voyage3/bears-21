import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/NotFound.js';
import Dummy from '../components/Dummy.js';

const Routes = () => {
	return (	
		<Switch>

			<Route exact path="/" component={Dummy} />
			<Route path="/login" component={Dummy} />
			<Route path="/signup" component={Dummy} />
			<Route path="*" component={NotFound} />

		</Switch>
	);
};
export default Routes;
