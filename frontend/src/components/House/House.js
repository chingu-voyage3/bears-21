import React, {Component} from 'react';
import {css} from 'aphrodite';
import styles from './styles';

export default class House extends Component {
  onNewIssue = () => {
    this.props.onNewIssue( this.props.data);
  };
  render = () => {
    return (
      <div>
        <img src={this.props.data.house_image} alt="noimg" />
        <div className={css(styles.title)}>
          House
          <button type="button" onClick={this.onNewIssue} >+</button>
        </div>
      </div>
    );
  };
};
