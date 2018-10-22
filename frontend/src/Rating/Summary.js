import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const filled_star = String.fromCharCode(9733);

const Summary = props => (
  <div className={css(styles.stars)}>
    {filled_star}
    <div className={css(styles.rating_value)}>{props.value}</div>
  </div>
);

Summary.propTypes = {
  value: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  stars: {
    position: 'relative',
    color: 'gold',
    borderRadius: '10px',
    fontSize: '3rem',
    fontWeight: 'normal'
  },
  rating_value: {
    position: 'absolute',
    color: 'rgba( 5,5,5, 0.5)',
    fontSize: '0.8rem',
    top: '1.4rem',
    left: '1.1rem',
    fontWeight: 'bold'
  }
});

export default Summary;
