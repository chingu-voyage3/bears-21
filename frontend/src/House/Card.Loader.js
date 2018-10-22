import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const CardLoader = () => (
  <div className={css(styles.container)}>
    <div className={css(styles.imageGreyed)} />
    <div className={css(styles.titleGreyed)} />
    <div className={css(styles.descriptionGreyed)} />
  </div>
);

const styles = StyleSheet.create({
  imageGreyed: {
    width: '100%',
    height: '200px',
    background: 'lightgrey'
  },
  titleGreyed: {
    width: '100%',
    height: '3rem',
    background: 'lightgrey',
    marginTop: '10px'
  },
  descriptionGreyed: {
    width: '100%',
    height: '4rem',
    background: 'lightgrey',
    marginTop: '10px'
  },
  container: {
    background: 'snow',
    boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.19)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    width: '320px'
  }
});

export default CardLoader;
