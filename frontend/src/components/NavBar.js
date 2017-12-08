import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

export default class NavBar extends Component {

	constructor() {
		super();
		this.state = {
			auth: false,
		}

	}


	getBar() {
		if (this.state.auth) { // authenticated
			return (
				<div>
					<ul className={css(styles.container)}>
						<li className={css(styles.titleelement)}><Link className={css(styles.links)} to="/">Hissues</Link></li>
						<li className={css(styles.navelement)}><Link className={css(styles.links)} to="/signout">Sign out</Link></li>
						<li className={css(styles.navelement)}><Link className={css(styles.links)} to="/dashboard">Dashboard</Link></li>
						<li className={css(styles.navelement)}><Link className={css(styles.links)} to="/newissue">New Issue</Link></li>
					</ul>
				</div>
			);
		} else { // not authenticated
			return (
				<div>
					<ul className={css(styles.container)}>
						<li className={css(styles.titleelement)}><Link className={css(styles.links)} to="/">Hissues</Link></li>
						<li className={css(styles.navelement)}><Link className={css(styles.links)} to="/dashboard">Dashboard</Link></li>
						<li className={css(styles.navelement)}><Link className={css(styles.links)} to="/login">Login</Link></li>
						<li className={css(styles.navelement)}><Link className={css(styles.links)} to="/register">Sign up</Link></li>
					</ul>
				</div>
			);
		}
	}






	render() {

		return this.getBar();


	}




}

const styles = StyleSheet.create({
	container: {
		listStyleType: 'none',
		margin: 0,
		padding: 0,
		overflow: 'hidden',
		backgroundColor: '#333',

	},
	navelement: {
		float: 'right',
	},
	titleelement: {
		float: 'left',
	},
	links: {
		display: 'block',
		color: 'white',
		textAlign: 'center',
		padding: '14px 16px',
		textDecoration: 'none',
		cursor: 'pointer',
	},
});
