import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';
import styles from './styles';

export default class Issue extends Component {
  static propTypes = {
    issue: PropTypes.object.isRequired,
    onIssueClick: PropTypes.func.isRequired
  };
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
