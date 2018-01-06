import React from 'react';
import { css, StyleSheet } from 'aphrodite';

export default (props) => (
  <input type="search" {...props} className={css(styles.input)} />
);

const styles = StyleSheet.create({
  input: {
    border: '0',
    padding: '10px',
    background: 'white',
    lineHeight: '50px',
    fontSize: '20px',
    borderRadius: '0',
    outline: '0',
    borderRight: '1px solid rgba(0,0,0,0.2)'
  }
});
