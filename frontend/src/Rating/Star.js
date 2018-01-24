import React from 'react';
import PropTypes from 'prop-types';
import StarSymbol from './StarSymbol';

const Star = (props) => {
  const onEnter = () => {
    props.onEnter(props.ratingValue);
  };
  const selected = e => {
    e.stopPropagation();
    props.selected(props.ratingValue);
  };
  const {lit} = props;
  const star = {
    color: lit?'gold':'black',
    fontWeight: 'normal'
  };
  return (
    <span style={star}
      onMouseEnter={onEnter}
      onClick={selected}>
      <StarSymbol lit={lit} />
    </span>
  );
};

Star.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  lit: PropTypes.bool.isRequired,
  selected: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
};

export default Star;
