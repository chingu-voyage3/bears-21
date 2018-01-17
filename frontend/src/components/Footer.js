import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const Footer = () => (
  <footer className={css(styles.footer)}>
    <section>Made by bears-21</section>
  </footer>
);
export default Footer;

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
