import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IssueItem from './IssueItem';
import styled from 'styled-components';

export default class IssueList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired, // list heading
    items: PropTypes.array.isRequired, // array of issues
    onIssueClick: PropTypes.func.isRequired
  };
  render = () => {
    return (
      <ColWrapper>
        <Title>{this.props.title}</Title>
        <List>
          {this.props.items.map((item, i) => (
            <IssueItem
              issue={item}
              key={i}
              onIssueClick={this.props.onIssueClick}
            />
          ))}
        </List>
      </ColWrapper>
    );
  };
}

const ColWrapper = styled.div`
  padding: 1em 0;
  width: 30%;
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 1px solid lightgrey;
`;

const List = styled.ul`
  margin: 0.5rem;
  padding: 0;
`;

const Title = styled.div`
  text-align: center;
`;
