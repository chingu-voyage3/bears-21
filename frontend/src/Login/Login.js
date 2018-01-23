import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { loginAction } from '../Redux/actions';
import { Link } from 'react-router-dom';
import axios from 'axios';

class login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      currentStatus: "",
    };
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.keyPressed);
  }

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.keyPressed);
  }

  keyPressed = (e) => {
    if (e.keyCode === 13) {
      setTimeout(this.login, 500);
    }
  }

  login = () => {
    axios.post("/api/v1/login", {
      email: this.state.email,
      password: this.state.password,
    })
    .then(res => {
      if (res.status === 200) {
        localStorage.setItem("user", true);
        this.props.onLogin();
      }
    })
    .catch(() => {
      this.setState({currentStatus: "ERROR!!"});
    });

    this.setState({email: "", password: ""});
  }

  render() {
    return (
      <div className={css(styles.centered, styles.background)}>
        <div className={css(styles.centered, styles.loginContainer)}>
          <input placeholder="your@email.com" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} className={css(styles.textarea)}></input>
          <input placeholder="your password" type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} className={css(styles.textarea)}></input>

          <div className={css(styles.boxes, styles.status)}>{this.state.currentStatus}</div>
          <button className={css(styles.login)} onClick={this.login}>Log in</button>

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
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    marginTop: 150,
    height: 200,
    width: 450,
    border: "1px solid black",
  },
  textarea: {
    resize: "none",
    fontSize: 18,
    padding: '10px 10px 10px 5px',
    marginTop: 10,
    border: "none",
    background: '#fafafa',
    borderRadius: 0,
    width: '100%',
    borderBottom: '1px solid #757575'
  },
  login: {
    padding: '12px 24px',
    margin: '.3em 0 1em 0',
    width: '100%',
    fontSize: 16,
    fontWeight: 400,
    background: "#FF5A5F",
    border: 0,
    borderRadius: 0,
    lineHeight: '20px',
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
    background: '#fafafa',
    border: '1px solid #ebebeb',
    padding: '1em 2em',
    position: 'relative',
    width: 400,
    maxHeight: 300
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
    backgroundColor: "#f0f0f0",
    padding: '5em 0'
  },
  status: {
    textAlign: "center",
    lineHeight: "25px",
  },
});
