import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

export default class Register extends Component {


  render() {
    return (
      <div className={css(styles.centre)}>
        <div className={css(styles.mainContainer, styles.centre)}>
          <div>Sign up</div>
          <textarea className={css(styles.textarea)}></textarea>       
          <textarea className={css(styles.textarea)}></textarea>       
          <textarea className={css(styles.textarea)}></textarea>       
          <textarea className={css(styles.textarea)}></textarea>       
          <textarea className={css(styles.textarea)}></textarea>       
          <button>Sign up</button>
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
  textarea: {
    resize: "none",
    marginTop: 5,
    marginBottom: 5,
  },
  


  
  
  
});
