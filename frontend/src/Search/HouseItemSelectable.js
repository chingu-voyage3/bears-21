import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HouseItem from './HouseItem';

class HouseItemSelectable extends Component {
  static propTypes = {
    house: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
  };
  onClick = () => {
    this.props.onClick(this.props.house);
  };
  render = () => {
    return (
      <div onClick={this.onClick}>
        <HouseItem house={this.props.house} />
      </div>
    );
  };
}

export default HouseItemSelectable;
