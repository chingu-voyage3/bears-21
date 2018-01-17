import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

class navbar extends Component {
	static propTypes = {
		user: PropTypes.bool,
		logout: PropTypes.func.isRequired
	};

	getBar() {
		if (this.props.user) { // authenticated
			return (
				<div>
					<ul className={css(styles.container)}>
						<li className={css(styles.titleelement)}>
							<Link className={css(styles.links)} to="/">Hissues</Link>
						</li>
						<li className={css(styles.titleelement)}>
							<Link className={css(styles.links)} to="/dashboard">
								Dashboard
							</Link>
						</li>
						<li className={css(styles.navelement)}
								onClick={() => this.props.logout()}>
							<Link className={css(styles.links)} to="/logout">
								Logout
							</Link>
						</li>
					</ul>
				</div>
			);
			// can't get these to work with redux. problem is inital state on new page
			// <li className={css(styles.navelement)}><Link className={css(styles.links)} to="/newissue">New Issue</Link></li>
			// <li className={css(styles.navelement)}>
			// 	<Link className={css(styles.links)} to={{
			// 			pathname: "/house",
			// 			state: { new_house: true}
			// 		}}>
			// 		New House
			// 	</Link>
			// </li>
		} else { // not authenticated
			return (
				<div>
					<ul className={css(styles.container)}>
						<li className={css(styles.titleelement)}><Link className={css(styles.links)} to="/">Hissues</Link></li>
						<li className={css(styles.navelement)}><Link className={css(styles.links)} to="/login">Login</Link></li>
						<li className={css(styles.navelement)}><Link className={css(styles.links)} to="/register">Register</Link></li>
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


function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  const LOGOUT = "LOGOUT";
  return {
    logout: () => {dispatch({type: LOGOUT})},
  }
}

const NavBar = connect(mapStateToProps, mapDispatchToProps)(navbar);
export default NavBar;
