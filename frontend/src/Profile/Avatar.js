import React from 'react';
import PropTypes from 'prop-types';
import {ImageDefault} from '../Image';
import {StyleSheet, css} from 'aphrodite';

const Avatar = ({name, image}) => (
  <div className={css(styles.wrapper)}>
    <ImageDefault src={image} missing_url='//via.placeholder.com/200x200?text=noimg' />
    <p>{name}</p>
  </div>
);

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 1 200px'
  }
});

export default Avatar;
