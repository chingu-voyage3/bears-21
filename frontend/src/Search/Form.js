import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const Form = props => <form {...props} className={css(styles.form)} />;
export default Form;

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    border: '10px solid rgba(0,0,0,0.3)',
    borderRadius: '5px',
    zIndex: '10'
  }
});
