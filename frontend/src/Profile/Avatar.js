import React from 'react';
import PropTypes from 'prop-types';
import { ImageDefault } from '../Image';
import { Uploader } from '../Uploader';
import styled from 'styled-components';

const Avatar = ({ name, localUser, image, changeImage }) => (
  <Wrapper>
    {localUser ? (
      <Uploader currentImage={image} addImage={changeImage} />
    ) : (
      <ImageDefault
        src={image}
        missing_url="//via.placeholder.com/200x200?text=noimg"
      />
    )}
    <p>{name}</p>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 200px;
`;

Avatar.propTypes = {
  localUser: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  changeImage: PropTypes.func.isRequired
};

export default Avatar;
