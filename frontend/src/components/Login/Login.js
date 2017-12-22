import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { loginAction } from '../../redux/actions';
import { Link } from 'react-router-dom';
import axios from 'axios';

class login extends Component {

	constructor() {
		super();
		this.state = {
			username: "",
			password: "",
      currentStatus: "",
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
		
		axios.post("http://localhost:3001/api/v1/login", {
			email: this.state.username,
			password: this.state.password,	
		})
		.then(res => {
			if (res.status === 200) {
				localStorage.setItem("user", true);
				this.props.onLogin();
			}
		})
		.catch(err => this.setState({currentStatus: "ERROR!!"}));
	

		this.setState({username: "", password: ""});
	}



	render() {

		return (


			<div className={css(styles.centered, styles.background)}>
				
        <div className={css(styles.centered, styles.loginContainer)}>

          <div className={css(styles.title)}>Login</div>

					<input placeholder="your@email.com" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} className={css(styles.textarea, styles.boxes)}></input>
					<input placeholder="your password" type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} className={css(styles.textarea, styles.boxes)}></input>

			    <div className={css(styles.boxes, styles.status)}>{this.state.currentStatus}</div>
        	<button className={css(styles.boxes, styles.login)} onClick={this.login}>LET ME IN</button>

          <div className={css(styles.accountHolder)}>
            <Link className={css(styles.account)} to="/register">Create Account</Link>
            <Link className={css(styles.account)} to="/forgot">Recover Password</Link> 
          </div>
				
        </div>


			</div>


		);



	}

}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch(loginAction())
  }

}

const Login = connect(mapStateToProps, mapDispatchToProps)(login);
export default Login;


const styles = StyleSheet.create({
	centered: {
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
	textarea: {
		resize: "none",
		marginTop: 10,
    border: "none",
    backgroundColor: "#F2F2F2",

	},
  login: {
    width: 286,
    backgroundColor: "#49CF87",
    color: "white",
	 }, 
  boxes: {
    width: 270,
    height: 25,
    border: "none",
    paddingLeft: 8,
    paddingRight: 8,
  }, 
  title: {
    fontSize: 50,
    marginBottom: 40,
    color: "white",
  },
  loginContainer: {
    position: "absolute",
    margin: "auto",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 400,
    height: 300,


  },
  account: {
    marginRight: 5,
    marginLeft: 5,
    textDecoration: "none",
    ":link": {
      color: "black",
    },
    ":visited": {
      color: "black",
    },
  },
  accountHolder: {
    marginTop: 10,
  },
  background: {
    backgroundColor: "#0079BF",
  },
	status: {
		textAlign: "center",
		lineHeight: "25px",
	},

});
