import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import AvatarLoader from './Avatar.Loader';
import DetailLoader from './Detail.Loader';

const ProfileLoader = () => (
  <div className={css(styles.container)}>
    <span className={css(styles.h1)}>Profile</span>
    <div className={css(styles.wrapper)}>
      <AvatarLoader />
      <DetailLoader />
    </div>
  </div>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    alignItems: "center"
  },
  h1: {
    marginTop: '1rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  wrapper: {
    margin: '1rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    border: '1px solid lightgrey',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.19) 0 0 8px 0',
  }
});

export default ProfileLoader;
