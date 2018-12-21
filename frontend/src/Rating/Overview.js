import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const filled_star = String.fromCharCode(9733);

const clicked = e => {
  e.stopPropagation();
};

const Overview = props => (
  <Star
    title={`Overall:${props.value}`}
    onClick={clicked}
    onMouseEnter={props.onEnter}
    onMouseLeave={props.onLeave}
  >
    {filled_star}
    <Rating>{Math.round(props.value)}</Rating>
  </Star>
);

Overview.propTypes = {
  value: PropTypes.number.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired
};

const Star = styled.div`
  position: relative;
  color: gold;
  background: transparent;
  border-radius: 0 10px 10px 0;
  font-size: 2.5rem;
`;

const Rating = styled.div`
  position: absolute;
  color: rgba(5, 5, 5, 0.5);
  top: 1rem;
  left: 0.9rem;
  font-size: 0.8rem;
  font-weight: bold;
`;

export default Overview;
