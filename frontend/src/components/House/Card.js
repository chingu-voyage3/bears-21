import React from 'react';
import PropTypes from 'prop-types';
import {ImageDefault} from '../Image';
import {StyleSheet, css} from 'aphrodite';

const Card = (props) => (
  <div className={css(styles.container)}>
    <ImageDefault src={props.house.images[0]} missing_url="//via.placeholder.com/350x150?No Image"/>
    <span className={css(styles.title)}>
      <h4 className={css(styles.title_heading)}>{ props.house.title }</h4>
    </span>
    <p className={css(styles.content)} >{ props.house.description }</p>
  </div>
);

Card.propTypes = {
  house: PropTypes.object
};

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
  title: {
    background: 'rgba(157, 187, 63, .85)',
    color: 'white',
    bottom: '0',
    width: '100%',
    padding: '3.5% 0 2.5% 0'
  },
  title_heading: {
    margin: '0',
    padding: '0 3.5%',
    lineHeight: '1.2'
  },
  content: {
    padding: '5% 5% 3% 5%'
  }
});

export default Card;
