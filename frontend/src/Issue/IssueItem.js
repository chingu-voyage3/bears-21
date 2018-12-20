import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
      <IssueStyle onClick={this.onClick}>{this.props.issue.title}</IssueStyle>
    );
  };
}

const IssueStyle = styled.li`
  padding: 3px 5px;
  cursor: pointer;
  text-align: left;
  list-style: none;

  &:hover {
    background: lightgrey;
    /* border: 1px solid rgba(127, 127, 127, 0.5); */
    /* one of these two options are the best and most clear... */
  }
`;
