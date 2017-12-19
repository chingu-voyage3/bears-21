import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';


export default class Forgot extends Component {
  
  
  render() {

    return (
    
      <div className={css(styles.centre)}>
        <div className={css(styles.mainBox, styles.centre)}>
          <div>Forgot Password</div>
          <textarea className={css(styles.textarea)}></textarea>

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
  
  
});
