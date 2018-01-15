import React from 'react';
import {ImageDefault} from '../../components/Image';
import { css, StyleSheet } from 'aphrodite';

const HouseItem = ({ house }) => (
  <div className={css(styles.container)}>
    <ImageDefault src={house.images[0]} missing_url="http://via.placeholder.com/350x150" />
    <span className={css(styles.title)}>
      <h4 style={{margin: '0', padding: '0 3.5%', lineHeight: '1.2'}}>{house.title}</h4>
    </span>
    <p className={css(styles.content)}>{house.description}</p>
  </div>
);

const styles = StyleSheet.create({
  container: {
    background: '#fefff9',
    boxShadow: 'rgba(0, 0, 0, 0.19) 0 0 8px 0',
    borderRadius: '4px',
    color: '#363636',
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    maxWidth: '320px'
  },
  image: {
    borderRadius: '4px 4px 0 0',
    width: '100%',
    padding: '0'
  },
  title: {
    background: 'rgba(157, 187, 63, .85)',
    color: 'white',
    bottom: '0',
    width: '100%',
    padding: '3.5% 0 2.5% 0'
  },
  content: {
    padding: '5% 5% 3% 5%'
  }
});

export default HouseItem;
