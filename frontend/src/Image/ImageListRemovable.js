import React from 'react';
import PropTypes from 'prop-types';
import ImageRemovable from './ImageRemovable';
import styled from 'styled-components';

export default class ImageListRemovable extends React.Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    removeImage: PropTypes.func.isRequired
  };
  removeImage = src => {
    this.props.removeImage(src);
  };
  render = () => {
    const image_list = this.props.images.map(img => {
      let src;
      if (typeof img === 'string') {
        src = img;
      } else {
        src = img.preview;
      }
      return (
        <ImageRemovable src={src} key={src} removeImage={this.removeImage} />
      );
    });
    return <Wrapper>{image_list}</Wrapper>;
  };
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px;
`;
