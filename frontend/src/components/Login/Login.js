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

    const { username, password } = this.state;
    axios.post('http://localhost:3001/api/v1/login', {
      email: username,
      password
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

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

			<div className={css(styles.centered)}>


				<div className={css(styles.box, styles.centered)}>

          <div>Login</div>

					<input placeholder="your@email.com" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} className={css(styles.textarea)}></input>
					<input placeholder="your password" type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} className={css(styles.textarea)}></input>

          <div>{this.state.currentStatus}</div>

        	<button className={css(styles.login)} onClick={this.login}>LOGIN</button>

          <div>
            <Link to="/register">New account</Link>
            <Link to="/forgot">New password</Link>
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
	title: {
		fontSize: 20,
	},
	textarea: {
		resize: "none",
		marginTop: 10,
		width: "60%",
    height: 25,
    paddingLeft: 7,
    border: "none",
    backgroundColor: "#F2F2F2",
	},
  login: {
    marginTop: 10,
    width: "60%",
    height: 25,
  },
});
