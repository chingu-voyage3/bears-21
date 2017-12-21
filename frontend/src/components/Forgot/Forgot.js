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
          <div>Forgot Password</div>
          <input placeholder="email" className={css(styles.textarea)} onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}></input>
          <button onClick={this.forgot}>Get new Password</button>
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
  mainBox: {
    border: "1px black solid",
    marginTop: 150,
    height: 200,
    width: 450,
  },
  textarea: {
    resize: "none",
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
