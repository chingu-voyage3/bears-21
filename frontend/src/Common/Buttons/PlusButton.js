import React from 'react';
import PropTypes from 'prop-types';

const PlusButton = (props) => (
  <button type="button" title={props.title} onClick={props.onClick} >
    +
  </button>
);

PlusButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PlusButton;
