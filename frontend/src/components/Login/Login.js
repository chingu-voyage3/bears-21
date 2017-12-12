import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


export default class Login extends Component {
	
	constructor() {
		super();
		this.state = {
			username: "",
			password: "",
		};
	}



	login = () => {
		console.log(this.state.username);
		console.log(this.state.password);
		console.log("SPEC");


		this.setState({username: "", password: ""});
	}



	render() {
		

		return (
			<div className={css(styles.container)}>
				

				<div className={css(styles.box, styles.container)}>
					<div className={css(styles.title)}>Login</div>

					<textarea value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} className={css(styles.textarea)}></textarea>
					<textarea value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} className={css(styles.textarea)}></textarea>

					<button onClick={this.login}>Login</button>
				</div>



			</div>		
				
				
		);



	}

}


const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justiftyContext: "center",
	},
	box: {
		marginTop: 150,
		height: 200,
		width: 450,
		border: "1px solid black",
	},
	title: {
		fontSize: 20,
	},
	textarea: {
		resize: "none",
		marginTop: 20,
		width: "60%",
		height: 25,
	},

});
