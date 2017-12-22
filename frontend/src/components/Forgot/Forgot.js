import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';


export default class Forgot extends Component {
 
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }


  forgot = () => {
    
  } 
  
  
  render() {
    return (
      <div className={css(styles.centre)}>
        <div className={css(styles.forgotContainer, styles.centre)}>
          <div className={css(styles.title)}>Forgot Password</div>
          <input placeholder="your@example.com" className={css(styles.textarea)} onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}></input>
          <div className={css(styles.status)}></div>
          <button className={css(styles.button)} onClick={this.forgot}>GET NEW PASSWORD</button>
        </div>

      </div>
    
    
    );


  }

}

const styles = StyleSheet.create({
  centre: {
    display: "flex",
    flexDirection: "column",
    justifyContext: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    color: "white",
    marginBottom: 40,
  },
  textarea: {
    resize: "none",
    border: "none",
    backgroundColor: "#F2F2F2",
    width: 270,
    paddingRight: 8,
    paddingLeft: 8,
    height: 25,
  },
  button: {
    width: 286,
    height: 25,
    color: "white",
    backgroundColor: "#49CF87",
    border: "none",
  },
  status: {
    width: 286,
    height: 25,

  },
  forgotContainer: {
    position: "absolute",
    margin: "auto",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 400,
    height: 300,
  },
});
