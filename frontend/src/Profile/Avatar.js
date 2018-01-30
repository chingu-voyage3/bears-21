import React from 'react';
import PropTypes from 'prop-types';
import {ImageDefault} from '../Image';
import {Uploader} from '../Uploader';
import {StyleSheet, css} from 'aphrodite';

const Avatar = ({name, localUser, image, changeImage}) => (
  <div className={css(styles.wrapper)}>
    {localUser
      ? <Uploader currentImage={image} addImage={changeImage} />
      : <ImageDefault src={image} missing_url='//via.placeholder.com/200x200?text=noimg' />
    }
    <p>{name}</p>
  </div>
);

Avatar.propTypes = {
  localUser: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  changeImage: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 1 200px'
  }
});

export default Avatar;
