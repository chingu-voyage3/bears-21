import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ImageDefault} from '../Image';
import {css} from 'aphrodite';
import styles from './styles';

export default class House extends Component {
  static propTypes = {
    house: PropTypes.object.isRequired,
    onNewIssue: PropTypes.func.isRequired,
    onEditHouse: PropTypes.func.isRequired
  };
  onNewIssue = e => {
    console.log( "new issue");
    e.stopPropagation();
    this.props.onNewIssue(this.props.house);
  };
  onEditHouse = e => {
    console.log( "edit house");
    this.props.onEditHouse(this.props.house);
  };

  render = () => {
    const house_image = this.props.house.images[0];
    return (
      <div className={css(styles.house_wrapper)} onClick={this.onEditHouse} >
        <ImageDefault src={house_image} missing_url="//via.placeholder.com/200x200?No Image"/>
        <div className={css(styles.title)}>
          {this.props.house.title}
          <button type="button" onClick={this.onNewIssue} title="Add Issue" >+</button>
        </div>
      </div>
    );
  };
}
