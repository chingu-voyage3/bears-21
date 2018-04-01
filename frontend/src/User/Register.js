import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import axios from 'axios';

export default class Register extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      password: "",
      confirmedPassword: "",
      currentStatus: "",
    };
  }

  register = () => {
    axios.post("/api/v1/register", {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      "password-confirm": this.state.confirmedPassword,
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
    this.setState({email: "", name: "", password: "", confirmedPassword: ""});
  }


  render() {
    return (
      <div className={css(styles.centered, styles.background)}>
        <div className={css(styles.registerContainer, styles.centered)}>
          <input placeholder="your name" className={css(styles.input)} onChange={e => this.setState({name: e.target.value})}></input>
          <input placeholder="your@example.com" className={css(styles.input)} onChange={e => this.setState({email: e.target.value})}></input>
          <input placeholder="your password" type="password" className={css(styles.input)} onChange={e => this.setState({password: e.target.value})}></input>
          <input placeholder="confirm password" type="password" className={css(styles.input)} onChange={e => this.setState({confirmedPassword: e.target.value})}></input>
          <div className={css(styles.status)}></div>
          <button className={css(styles.button)} onClick={this.register}>Sign up</button>
        </div>
      </div>
     );
  }

}


const styles = StyleSheet.create({
  centered: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContext: "center",
  },
  input: {
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
  registerContainer: {
    background: '#fafafa',
    border: '1px solid #ebebeb',
    padding: '3em 2em 2em 2em',
    position: 'relative',
    width: 400,
  },
  status: {
    width: 286,
    height: 25,
  },
  button: {
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
  background: {
    backgroundColor: "#f0f0f0",
    padding: '5em 0'
  },
});
