import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

const AutoCompleteItem = ({ link, text }) => (
  <li className={css(styles.li)}>
    <a className={css(styles.a)} href={link}>{text}</a>
  </li>
);

AutoCompleteItem.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string
};

const styles = StyleSheet.create({
  a: {
    color: 'black',
    textDecoration: 'none'
  },
  li: {
    background: '#fff',
    padding: '1rem 1rem',
    borderBottom: '1px solid #D8D8D8'
  }
});

export default AutoCompleteItem;
