import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const SubmitInput = props => (
  <input
    type="submit"
    value="search"
    {...props}
    className={css(styles.input)}
  />
);
export default SubmitInput;

const styles = StyleSheet.create({
  input: {
    border: 0,
    margin: 0,
    padding: '10px',
    lineHeight: '50px',
    fontSize: '20px',
    borderRadius: 0,
    outline: 0,
    borderRight: '1px solid rgba(0,0,0,0.2)',
    background: '#FF5A5F',
    borderTop: '1px solid #FF5A5F',
    borderBottom: '1px solid #FF5A5F',
    color: 'white',
    flexBasis: '500px'
  }
});
