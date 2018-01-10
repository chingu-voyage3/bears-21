import React, {Component} from 'react';
import {css} from 'aphrodite';
import styles from './styles';

export default class House extends Component {
  onNewIssue = () => {
    this.props.onNewIssue( this.props.data);
  };

  render = () => {
    const { data = {} } = this.props;
    const { images = [], title } = data;
    return (
      <div style={{ width:"215px", textAlign:"center" }}>
        <img src={images[0]} alt="noimg" />
        <div className={css(styles.title)}>
          {title}
          <button type="button" onClick={this.onNewIssue} >+</button>
        </div>
      </div>
    );
  };
};
