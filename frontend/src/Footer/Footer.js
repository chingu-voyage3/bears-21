import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const Footer = () => (
  <footer className={css(styles.footer)}>
    <section className={css(styles.section)}>
      Made by bears-21 with <span role="img" aria-label="heart">❤️ </span>
    </section>
  </footer>
);
export default Footer;

const styles = StyleSheet.create({
  footer: {
    color: '#715c57',
    padding: '2rem',
    backgroundColor: '#dae6f1'
  },
  section: {
    width: '100%',
    textAlign: 'center'
  }
});
