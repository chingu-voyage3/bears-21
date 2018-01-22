import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const cross_symbol = String.fromCharCode( 10799);

const CrossButton = (props) => (
  <button type="button" title={props.title}
    className={css(styles.cross_box_colour)}
    onClick={props.onClick} >
    {cross_symbol}
  </button>
);

CrossButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  cross_box_colour: {
    background: "tomato" // "linear-gradient( to top, #49CF87, #40C080)"
  }
});

export default CrossButton;
