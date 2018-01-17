import React from 'react';
import PropTypes from 'prop-types';

const cross_symbol = String.fromCharCode( 10799);
const CloseButton = (props) => (
  <button type="button" onClick={props.onClearPic} title={props.title} >
    {cross_symbol}
  </button>
);
CloseButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClearPic: PropTypes.func.isRequired
};
export default CloseButton;
