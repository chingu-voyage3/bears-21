import React from 'react';
import PropTypes from 'prop-types';

export default class Star extends React.Component {
  static propTypes = {
    ratingValue: PropTypes.number.isRequired,
    lit: PropTypes.bool.isRequired,
    selected: PropTypes.func.isRequired,
    onEnter: PropTypes.func.isRequired,
  };
  onEnter = () => {
    this.props.onEnter(this.props.ratingValue);
  };
  selected = () => {
    this.props.selected(this.props.ratingValue);
  };
  render = () => {
    const filled_star = String.fromCharCode(9733);
    const line_star = String.fromCharCode(9734);
    const {lit} = this.props;
    const star = {
      color: lit?'gold':'black'
    };
    return (
      <span style={star}
        onMouseEnter={this.onEnter}
        onClick={this.selected}>
        {lit
          ? filled_star
          : line_star
        }
      </span>
    );
  };
}
