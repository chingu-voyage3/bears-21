import React from 'react';
import PropTypes from 'prop-types';
import { postRating } from './actions';
import Overview from './Overview';
import Bar from './Bar';
import styled from 'styled-components';

export default class Rating extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    parent_id: PropTypes.string.isRequired,
    currentRating: PropTypes.number.isRequired
  };
  state = {
    show_rating_bar: false,
    currentRating: 0
  };
  componentWillMount = () => {
    this.setState({ currentRating: this.props.currentRating });
  };
  showRatingBar = () => {
    this.setState({ show_rating_bar: true });
  };
  hideRatingBar = () => {
    this.setState({ show_rating_bar: false });
  };
  ratingSelected = value => {
    const { type, parent_id } = this.props;
    postRating(type, parent_id, value).then(response => {
      this.setState({ currentRating: response.rating });
    });
  };
  render = () => {
    const { show_rating_bar, currentRating } = this.state;
    return (
      <Wrapper>
        <Bar
          visible={show_rating_bar}
          onSelected={this.ratingSelected}
          onEnter={this.showRatingBar}
          onLeave={this.hideRatingBar}
        />
        <Overview
          value={currentRating}
          onEnter={this.showRatingBar}
          onLeave={this.hideRatingBar}
        />
      </Wrapper>
    );
  };
}

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  font-size: 2rem;
`;
