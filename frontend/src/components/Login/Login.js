import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { loginAction } from '../../redux/actions';
import { Link } from 'react-router-dom';

class login extends Component {
	
	constructor() {
		super();
		this.state = {
			username: "",
			password: "",
		};
	}

  componentDidMount() {
    document.addEventListener("keydown", this.keyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressed);
  }

  keyPressed = e => {
    if (e.keyCode === 13) {
      setTimeout(this.login, 500);
    
    }

  }


	login = () => {
		console.log(this.state.username);
		console.log(this.state.password);
    
    
    // send XHR request/axios to backend or whatever... then...
    // but for the meanwhile
    if (this.state.username === "admin" && this.state.password === "admin") {
      localStorage.setItem("user", true);
      this.props.onLogin();     
    }
    


		this.setState({username: "", password: ""});
	}



	render() {
		

		return (

			<div className={css(styles.container)}>
				

				<div className={css(styles.box, styles.container)}>
					<div className={css(styles.title)}>Login</div>

					<input placeholder="username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} className={css(styles.textarea)}></input>
					<input placeholder="password" type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} className={css(styles.textarea)}></input>

          <Link to="/forgot">Forgot your password?</Link> 
					<button onClick={this.login}>Login</button>
				</div>



			</div>		
				
				
		);



	}

}

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch(loginAction())
  }
  

}

const Login = connect(mapStateToProps, mapDispatchToProps)(login);
export default Login;


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
