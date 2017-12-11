import React, { Component } from 'react';
import Routes from '../routes/Routes';
import NavBar from './NavBar';

export default class App extends Component {

	render() {
		return (
			<div>
				<NavBar />

				<Routes />
			</div>
		);
  	}
}
