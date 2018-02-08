import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const AvatarLoader = () => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.uploader)} />
    <div className={css(styles.name)} />
  </div>
);

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1'
  },
  uploader: {
    width: '200px',
    height: '200px',
    background: 'lightgrey'
  },
  name: {
    margin: "10px",
    width: "100px",
    height: "1.2rem",
    background: 'lightgrey'
  }
});

export default AvatarLoader;
