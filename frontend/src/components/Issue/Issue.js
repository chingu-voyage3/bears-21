import React, {Component} from 'react';
import {css} from 'aphrodite';
import styles from './styles';

export default class Issue extends Component {
  onClick = () => {
    this.props.onIssueClick( this.props.issue);
  };
  render = () => {
    return (
      <li className={css(styles.issue_style)} onClick={this.onClick} >
        {this.props.issue.title}
      </li>
    );
  };
};
