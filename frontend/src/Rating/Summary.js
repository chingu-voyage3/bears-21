import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const circled_white_star = String.fromCharCode(10026);

const Summary = (props) => (
  <div className={css(styles.stars)} >
    {circled_white_star}
    <div className={css(styles.rating_value)} >
      {props.value}
    </div>
  </div>
);

Summary.propTypes = {
  value: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  stars: {
    position: 'relative',
    color: 'gold',
    borderRadius: '10px',
    fontSize: "2.5rem"
  },
  rating_value: {
    position: "absolute",
    color: 'rgba( 5,5,5, 0.5)',
    fontSize: '1rem',
    top: '0.75rem',
    left: '0.75rem',
    fontWeight: 'normal'
  }
});

export default Summary;
