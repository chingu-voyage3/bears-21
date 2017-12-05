import React, { Component } from 'react';
import Routes from './routes/Routes.js';
import { Link } from 'react-router-dom';

export default class App extends Component {

	render() {
		return (
			<div>
				<div>HI</div>    
				<Link to="/login">Login</Link>
				<Routes />
			</div>
		);
  	}
}


