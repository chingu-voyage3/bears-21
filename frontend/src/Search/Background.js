import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const Background = () => (
  <img src="http://lorempixel.com/1000/600/abstract" className={css(styles.img)} alt="background" />
);
export default Background;

const styles = StyleSheet.create({
  img: {
    position: 'absolute',
    width: '100%',
    top: '0',
    filter: 'blur(5px)'
  }
});
