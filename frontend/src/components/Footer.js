import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

export default class Footer extends Component {

  render() {
    return <div className={css(styles.footer)}>Made by bears-21</div>;
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
