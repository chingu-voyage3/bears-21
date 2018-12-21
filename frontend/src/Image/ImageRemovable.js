import React from 'react';
import PropTypes from 'prop-types';
import ImageDefault from './ImageDefault';
import { CrossButton } from '../Common/Buttons';
import styled from 'styled-components';

export default class ImageRemovable extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    removeImage: PropTypes.func.isRequired
  };
  onRemove = () => {
    this.props.removeImage(this.props.src);
  };
  render = () => {
    const { src } = this.props;
    return (
      <Wrapper>
        <CrossStyle>
          <CrossButton onClick={this.onRemove} title="Remove Image" />
        </CrossStyle>
        <ImageDefault
          src={src}
          missing_url="//via.placeholder.com/200x200?No Image"
        />
      </Wrapper>
    );
  };
}

const Wrapper = styled.div`
  position: relative;
  padding: 0 20px;
  border: 2px solid darkgrey;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 #ccc;
  background: lightgrey;
  max-width: 220px;
`;

// "linear-gradient( to top, #49CF87, #40C080)"
const CrossStyle = styled.div`
  background: tomato;
`;
