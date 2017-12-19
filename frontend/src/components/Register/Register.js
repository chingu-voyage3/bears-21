import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

export default class Register extends Component {


  render() {
    return (
      <div className={css(styles.centre)}>
        <div className={css(styles.mainContainer)}>
        
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
    width: "50%",
    height: 200,
    marginTop: 100,
  },
  


  
  
  
});
