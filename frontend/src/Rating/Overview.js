import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const filled_star = String.fromCharCode(9733);

const Overview = (props) => (
  <div title={`Overall:${props.value}`}
    className={css(styles.stars)}
    onMouseEnter={props.onEnter}
    onMouseLeave={props.onLeave} >
    {filled_star}
    <div className={css(styles.rating_value)} >
      {props.value}
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
    backgroundColor: 'skyblue',
    borderRadius: '0px 10px 10px 0px'
  },
  rating_value: {
    position: "absolute",
    color: 'black',
    top: '0.55rem',
    left: '0.6rem',
    fontSize: '1rem',
    fontWeight: 'normal'
  }
});

export default Overview;
