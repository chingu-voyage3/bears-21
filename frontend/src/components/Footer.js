import React from 'react';
import { css, StyleSheet } from 'aphrodite';

export default () => (
  <footer className={css(styles.footer)}>
    <section className={css(styles.section)}>Made by bears-21 with ❤️</section>
  </footer>
);

const styles = StyleSheet.create({
  footer: {
    color: '#715c57',
    padding: '2rem',
    marginTop: '3rem',
    backgroundColor: '#dae6f1'
  },
  section: {
    width: '100%',
    textAlign: 'center'
  }
});
