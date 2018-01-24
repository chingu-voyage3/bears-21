import React from 'react';
import PropTypes from 'prop-types';
import {ImageDefault} from '../Image';
import Rating from '../Rating';
import {StyleSheet, css} from 'aphrodite';

const Card = (props) => (
  <div className={css(styles.container)}>
    <ImageDefault src={props.house.images[0]} missing_url="//via.placeholder.com/350x150?No Image"/>
    <div className={css(styles.title)}>
      {props.house.title}
      <Rating currentRating={props.house.rating}
              type="house"
              parent_id={props.house._id} />
    </div>
    <p className={css(styles.content)} >{ props.house.description }</p>
  </div>
);

Card.propTypes = {
  house: PropTypes.object.isRequired
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
    width: '320px'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    margin: '0',
    padding: '1% 2.5%',
    lineHeight: '1.2',
    background: 'rgba(157, 187, 63, .85)',
    color: 'white',
    bottom: '0',
    width: '100%'
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
