import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

export default class Register extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      fpassword: "",
      spassword: "",
    };


  }


  render() {
    console.log(this.state);
    return (
      <div className={css(styles.centre)}>
        <div className={css(styles.registerContainer, styles.centre)}>
          <div className={css(styles.title)}>Sign up</div>
          <input placeholder="your name" className={css(styles.input)} onChange={e => this.setState({name: e.target.value})}></input>       
          <input placeholder="your@example.com" className={css(styles.input)} onChange={e => this.setState({email: e.target.value})}></input>       
          <input placeholder="your password" className={css(styles.input)} onChange={e => this.setState({fpassword: e.target.value})}></input>       
          <input placeholder="confirm password" className={css(styles.input)} onChange={e => this.setState({spassword: e.target.value})}></input>       
          <div className={css(styles.status)}></div>
          <button className={css(styles.button)}>Sign up</button>
        </div>    
      </div>
     );
  }

}





const styles = StyleSheet.create({
  centre: {
    display: "flex",
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
    position: "absolute",
    margin: "auto",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
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
});
