import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import HouseWithUpdateButtons from './HouseWithUpdateButtons';
import { FilteredIssueList } from '../Issue';
import styled from 'styled-components';

export default class HouseList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired, // array of houses with issues
    onDeleteHouse: PropTypes.func.isRequired
  };
  state = {
    new_issue: null,
    edit_house: null
  };
  onNewIssue = house => {
    this.setState({ new_issue: house });
  };
  onEditHouse = house => {
    this.setState({ edit_house: house });
  };
  render = () => {
    if (this.state.new_issue) {
      return (
        <Redirect
          to={{
            pathname: '/issue/new',
            state: { house_id: this.state.new_issue._id }
          }}
        />
      );
    }
    if (this.state.edit_house) {
      return (
        <Redirect
          to={{
            pathname: '/house/' + this.state.edit_house._id,
            state: { house: this.state.edit_house }
          }}
        />
      );
    }
    const { data } = this.props;
    const house_list = data.map((house, ndx) => {
      return (
        <Wrapper key={ndx}>
          <HouseWithUpdateButtons
            house={house}
            onNewIssue={this.onNewIssue}
            onEditHouse={this.onEditHouse}
            onDeleteHouse={this.props.onDeleteHouse}
          />
          <FilteredIssueList
            data={house.issues}
            statusFilter="open"
            title="Open Issues"
          />
          <FilteredIssueList
            data={house.issues}
            statusFilter="resolved"
            title="Resolved Issues"
          />
        </Wrapper>
      );
    });
    return <div>{house_list}</div>;
  };
}

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
`;
