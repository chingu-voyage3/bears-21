import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

export default class Footer extends Component {

  render() {
    return <div className={css(styles.footer)}>bears-21 2017<a href="https://www.github.com/chingu-voyage3/bears-21">Github</a>.</div>;
  }

}


const styles = StyleSheet.create({
  footer: {
    bottom: 6,
    position: "absolute",
    width: "95%",
    textAlign: "center",
  },
});
