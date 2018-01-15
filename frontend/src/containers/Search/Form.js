import React from 'react';
import { css, StyleSheet } from 'aphrodite';

export default (props) => (
  <form {...props} className={css(styles.form)}></form>
);

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    border: '20px solid rgba(0,0,0,0.3)',
    borderRadius: '5px',
    zIndex: '10'
  },
});
