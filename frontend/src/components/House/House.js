import React, {Component} from 'react';
import {css} from 'aphrodite';
import styles from './styles';

export default class House extends Component {
  onNewIssue = () => {
    this.props.onNewIssue( this.props.data);
  };
  render = () => {
    const house_image = this.props.data.images[0];
    return (
      <div style={{width:"215px",textAlign:"center"}}>
        <img src={house_image} alt="noimg" />
        <div className={css(styles.title)}>
          {this.props.data.title}
          <button type="button" onClick={this.onNewIssue} >+</button>
        </div>
      </div>
    );
  };
};
