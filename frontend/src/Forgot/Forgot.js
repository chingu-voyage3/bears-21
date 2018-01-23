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

  render = () => {
    return (
      <div className={css(styles.centre)}>
        <div className={css(styles.forgotContainer)}>
          <input placeholder="your@example.com" className={css(styles.textarea)} onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}></input>
          <div className={css(styles.status)}></div>
          <button className={css(styles.button)} onClick={this.forgot}>Get New Password</button>
        </div>
      </div>
    );
  }

}

const styles = StyleSheet.create({
  centre: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: '5em 1em'
  },
  title: {
    fontSize: 50,
    color: "white",
    marginBottom: 40,
  },
  textarea: {
    resize: "none",
    fontSize: 16,
    fontWeight: 400,
    padding: '10px 10px 10px 5px',
    marginTop: 10,
    border: "none",
    background: '#fafafa',
    borderRadius: 0,
    width: '100%',
    borderBottom: '1px solid #757575'
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
  status: {
    width: 286,
    height: 25,
  },
  forgotContainer: {
    background: '#fafafa',
    border: '1px solid #ebebeb',
    position: 'relative',
    padding: '1em 1em',
    width: 400,
    maxHeight: 200
  },
});
