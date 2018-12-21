import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { CrossButton, PlusButton } from '../Common/Buttons';
import styled from 'styled-components';

export default class House extends Component {
  static propTypes = {
    house: PropTypes.object.isRequired,
    onNewIssue: PropTypes.func.isRequired,
    onEditHouse: PropTypes.func.isRequired,
    onDeleteHouse: PropTypes.func.isRequired
  };
  onNewIssue = e => {
    e.stopPropagation();
    this.props.onNewIssue(this.props.house);
  };
  onEditHouse = () => {
    this.props.onEditHouse(this.props.house);
  };
  onDeleteHouse = e => {
    e.stopPropagation();
    this.props.onDeleteHouse(this.props.house);
  };
  render = () => {
    const { house } = this.props;
    return (
      <Wrapper onClick={this.onEditHouse}>
        <Card house={house} />
        <AddIssue>
          <PlusButton title="Add Issue" onClick={this.onNewIssue} />
        </AddIssue>
        <CloseButton>
          <CrossButton title="Delete House" onClick={this.onDeleteHouse} />
        </CloseButton>
      </Wrapper>
    );
  };
}

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const AddIssue = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
`;
