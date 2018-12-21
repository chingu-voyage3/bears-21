import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import styled, { css } from 'styled-components';

export default class Bar extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    onSelected: PropTypes.func.isRequired,
    onEnter: PropTypes.func.isRequired,
    onLeave: PropTypes.func.isRequired
  };
  defaultStars = [false, false, false, false, false];
  state = {
    stars: this.defaultStars
  };
  onEnter = value => {
    const stars = this.state.stars.map((star, i) => {
      if (i < value) return true;
      return false;
    });
    this.setState({ stars });
  };
  onLeaveBar = () => {
    this.setState({ stars: this.defaultStars });
    this.props.onLeave();
  };
  render = () => {
    const { stars } = this.state;
    const { visible, onEnter, onSelected } = this.props;
    return (
      <Wrapper
        visible={visible}
        onMouseEnter={onEnter}
        onMouseLeave={this.onLeaveBar}
      >
        {[0, 1, 2, 3, 4].map(x => (
          <Star
            selected={onSelected}
            lit={stars[x]}
            ratingValue={x + 1}
            onEnter={this.onEnter}
          />
        ))}
      </Wrapper>
    );
  };
}

const Wrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 0.6rem;
  right: 2.1rem;
  background-color: rgba(171, 197, 90, 0.85);
  border-radius: 10px 0 0 10px;
  font-size: 1.5rem;
  display: none;

  ${props =>
    props.visible &&
    css`
      display: block;
    `};
`;
