import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const STAR_SYMBOL = String.fromCharCode(9733);

const Summary = props => (
  <Stars>
    {STAR_SYMBOL}
    <RatingValue>{props.value}</RatingValue>
  </Stars>
);

Summary.propTypes = {
  value: PropTypes.number.isRequired
};

const Stars = styled.div`
  position: relative;
  color: gold;
  border-radius: 10px;
  font-size: 3rem;
  font-weight: normal;
`;

const RatingValue = styled.div`
  position: absolute;
  color: rgba(5, 5, 5, 0.5);
  font-size: 0.8rem;
  top: 1.4rem;
  left: 1.1rem;
  font-weight: bold;
`;

export default Summary;
