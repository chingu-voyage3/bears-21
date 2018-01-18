import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

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
}

const styles = StyleSheet.create({
  issue_style: {
    cursor: "pointer",
    textAlign: "left",
    listStyle: "none",
    ":hover": {
      background: "lightgrey"
    }
  }
});
