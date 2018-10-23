// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const filled_star = String.fromCharCode(9733);
const line_star = String.fromCharCode(9734);

const StarSymbol = ({lit}) => (
  lit? filled_star : line_star
);

StarSymbol.propTypes = {
  lit: PropTypes.bool.isRequired
};

export default StarSymbol;
