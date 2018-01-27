import React, {Component} from 'react';
import HouseItem from './HouseItem';

class  HouseItemSelectable extends Component {
  onClick = () => {
    console.log( "HouseItemSelectable click, ouse:", this.props.house);
    this.props.onClick( this.props.house);
  };
  render = () => {
    return (
      <div onClick={this.onClick}>
        <HouseItem house={this.props.house} />;
      </div>
    );
  };
}

export default HouseItemSelectable;
