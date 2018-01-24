import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const Detail = ({data}) => (
  <div className={css(styles.wrapper)} >
    <label className={css(styles.left_grid)}>Name</label>
    <div className={css(styles.right_grid)} >{data.name}</div>
    <label className={css(styles.left_grid)}>Email</label>
    <div className={css(styles.right_grid)} >{data.email}</div>
  </div>
);

Detail.propTypes = {
  data: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    margin: '0 2rem',
    display: "grid",
    alignItems: "baseline",
    flex: '1',
    gridTemplateColumns: "1fr 3fr",
    gridTemplateRows: '2rem 2rem 2rem',
    gridGap: "8px"
  },
  left_grid: {
    padding: '1rem 0 1rem 0',
    lineHeight: "1.5em",
    textAlign: "right",
    gridColumn: "1/2",
    fontWeight: 'bold'
  },
  right_grid: {
    padding: '1rem 0 1rem 0',
    gridColumn: "2/3"
  }
});

export default Detail;
