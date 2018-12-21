import React from 'react';
import PropTypes from 'prop-types';
import ImageDefault from './ImageDefault';
import styled from 'styled-components';

export default class ImageList extends React.Component {
  static propTypes = {
    images: PropTypes.array.isRequired
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
        <Wrapper key={src}>
          <ImageDefault
            src={src}
            missing_url="//via.placeholder.com/200x200?text=no image"
          />
        </Wrapper>
      );
    });
    return <Container>{image_list}</Container>;
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px;
`;

const Wrapper = styled.div`
  padding: 0 20px;
  border: 2px solid darkgrey;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 #ccc;
  background: lightgrey;
  max-width: 220px;
`;
