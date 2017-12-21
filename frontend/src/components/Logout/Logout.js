import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

export default class Logout extends Component {
  
  
  render() {

    localStorage.removeItem("user");

    return (
      <div className={css(styles.centered)}>
        
        <div className={css(styles.info)}>You have successfully been logged out!</div>


      </div>  
    
    );

    
  }






}

const styles = StyleSheet.create({
  centered: {
    display: "flex",
    flexDirections: "column",
    alignItems: "center",
    justifyContent: "center",  
  },
  info: {
    textAlignment: "centered",
  }, 
  
});
