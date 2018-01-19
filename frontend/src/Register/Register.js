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

  register() {
    axios.post("/api/v1/register", {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      "password-confirm": this.state.confirmedPassword,
    })
    .then(() => {
      // console.log(res);
    })
    .catch(() => {
      // console.log(err);
    });
    this.setState({email: "", name: "", password: "", confirmedPassword: ""});
  }


  render() {
    // console.log(this.state);
    return (
      <div className={css(styles.centered, styles.background)}>
        <div className={css(styles.registerContainer, styles.centered)}>
          <div className={css(styles.title)}>Sign up</div>
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
  mainContainer: {
    border: "1px black solid",
    width: 450,
    height: 400,
    marginTop: 150,
  },
  input: {
    resize: "none",
    marginTop: 5,
    marginBottom: 5,
    width: 270,
    height: 25,
    paddingLeft: 8,
    paddingRight: 8,
  },
  title: {
    color: "white",
    fontSize: 50,
    marginBottom: 40,
  },
  registerContainer: {
    width: 400,
    height: 300,
  },
  status: {
    width: 286,
    height: 25,
  },
  button: {
    width: 286,
    height: 25,
    color: "white",
    backgroundColor: "#49CF87",
    border: "none",
  },
  background: {
    backgroundColor: "#0079BF",
  },
});
