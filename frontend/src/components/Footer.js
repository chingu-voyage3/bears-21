import React from 'react';
import { css, StyleSheet } from 'aphrodite';

export default () => (
  <footer className={css(styles.footer)}>
    <section>Made by bears-21</section>
  </footer>
);

const styles = StyleSheet.create({
  footer: {
    color: 'white',
    display: 'flex',
    padding: '1em 0',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
  },
});
