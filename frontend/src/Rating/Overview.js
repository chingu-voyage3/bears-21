import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const filled_star = String.fromCharCode(9733);

const clicked = e => {
  e.stopPropagation();
};

const Overview = (props) => (
  <div title={`Overall:${props.value}`}
    className={css(styles.stars)}
    onClick={clicked}
    onMouseEnter={props.onEnter}
    onMouseLeave={props.onLeave} >
    {filled_star}
    <div className={css(styles.rating_value)} >
      {Math.round( props.value)}
    </div>
  </div>
);

Overview.propTypes = {
  value: PropTypes.number.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  stars: {
    position: 'relative',
    color: 'gold',
    background: 'transparent',
    borderRadius: '0px 10px 10px 0px',
    fontSize: '2rem'
  },
  rating_value: {
    position: "absolute",
    color: 'rgba( 5,5,5, 0.5)',
    top: '0.6rem',
    left: '0.6rem',
    fontSize: '1rem',
    fontWeight: 'normal'
  }
});

export default Overview;
