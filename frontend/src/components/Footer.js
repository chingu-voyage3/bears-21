import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

export default class Footer extends Component {

  render() {
    return <footer className={css(styles.footer)}>Made by bears-21</footer>;
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
