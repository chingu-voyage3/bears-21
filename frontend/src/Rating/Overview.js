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
  </div>
);
// TODO: put value in middle of star
// <div className={css(styles.rating_value)}
//   style={{
//     fontSize: `${props.fontSize/3}rem`,
//     top: `${props.fontSize*7/16}rem`,
//     left: `${props.fontSize*11/32}rem`
//   }}>
//   {props.value}
// </div>

Overview.propTypes = {
  value: PropTypes.number.isRequired,
  // fontSize: PropTypes.number.isRequired,
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
    color: 'black'
  }
});

export default Overview;
