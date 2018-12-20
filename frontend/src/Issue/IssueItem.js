import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default class Issue extends Component {
  static propTypes = {
    issue: PropTypes.object.isRequired,
    onIssueClick: PropTypes.func.isRequired
  };
  onClick = () => {
    this.props.onIssueClick(this.props.issue);
  };
  render = () => {
    return (
      <li className={css(styles.issue_style)} onClick={this.onClick}>
        {this.props.issue.title}
      </li>
    );
  };
}

const styles = StyleSheet.create({
  issue_style: {
    padding: '3px 5px',
    cursor: 'pointer',
    textAlign: 'left',
    listStyle: 'none',
    ':hover': {
      // what do you fancy for highlight? bg colour, border or text colour?
      // background: "lightgrey"
      // border: '1px solid rgba( 127,127,127,0.5)',
      // padding: '2px 4px',
      color: 'rgb( 171, 107, 90)'
    }
  }
});
