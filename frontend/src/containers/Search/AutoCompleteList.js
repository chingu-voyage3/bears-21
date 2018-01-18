import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';
import AutoCompleteItem from './AutoCompleteItem';

const AutoCompleteList = ({ items=[] }) => {
  const listItems = items.map((item, idx) => <AutoCompleteItem key={idx} {...item} />);
  return <ul className={css(styles.list)}>{listItems}</ul>;
};

AutoCompleteList.propTypes = {
  items: PropTypes.array
};

const styles = StyleSheet.create({
  list: {
    background: '#fff',
    padding: 0,
    margin: 0,
    width: '280px',
  }
});

export default AutoCompleteList;
