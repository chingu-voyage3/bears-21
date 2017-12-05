import React, { Component } from 'react';
import Routes from './routes/Routes.js';
import { Link } from 'react-router-dom';

export default class App extends Component {

	render() {
		return (
			<div>
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
				<Link to="/forgot">Forgot Password</Link>
				<Link to="/admin">Admin Dashboard</Link>
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/newissue">Home</Link>
							
				<Routes />
			</div>
		);
  	}
}


