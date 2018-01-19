import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';
import AutoCompleteItem from './AutoCompleteItem';

const AutoCompleteList = ({ items=[] }) => {
  const listItems = items.map((item, idx) => <AutoCompleteItem key={idx} {...item} />);
  return (
    <div className={css(styles.wrapper)}>
      <ul className={css(styles.list)}>{listItems}</ul>
    </div>
  );
};

AutoCompleteList.propTypes = {
  items: PropTypes.array
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: '290px',
    zIndex: '1000'
  },
  list: {
    background: '#fff',
    margin: 0,
    padding: 0,
    position: 'relative',
    width: '280px',
    listStyle: 'none',
    maxHeight: '300px',
    overflow: 'scroll'
  }
});

export default AutoCompleteList;
