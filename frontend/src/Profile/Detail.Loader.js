import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Detail = () => (
  <div className={css(styles.wrapper)}>
    <label className={css(styles.left_grid)}>
      <div className={css(styles.label)} />
    </label>
    <div className={css(styles.right_grid)}>
      <div className={css(styles.item)} />
    </div>
    <label className={css(styles.left_grid)}>
      <div className={css(styles.label)} />
    </label>
    <div className={css(styles.right_grid)}>
      <div className={css(styles.item)} />
    </div>
  </div>
);

const styles = StyleSheet.create({
  label: {
    width: '100px',
    height: '2rem',
    background: 'grey',
    borderRadius: '5px'
  },
  item: {
    width: '200px',
    height: '2rem',
    background: 'grey',
    borderRadius: '5px'
  },
  wrapper: {
    margin: '0 2rem',
    display: 'grid',
    alignItems: 'baseline',
    flex: '1',
    gridTemplateColumns: '1fr 3fr',
    gridTemplateRows: '2rem 2rem 2rem',
    gridGap: '8px'
  },
  left_grid: {
    padding: '1rem 0 1rem 0',
    lineHeight: '1.5em',
    textAlign: 'right',
    gridColumn: '1/2',
    fontWeight: 'bold'
  },
  right_grid: {
    padding: '1rem 0 1rem 0',
    gridColumn: '2/3'
  }
});

export default Detail;
