import React from 'react';
import PropTypes from 'prop-types';
import {ImageDefault} from '../Image';
import {css} from 'aphrodite';
import styles from './styles';

export default class Card extends React.Component {
  static propTypes = {
    house: PropTypes.object.isRequired
  };
  render = () => {
    const {house} = this.props;
    return (
      <div className={css(styles.card_wrapper)}>
        <h4 className={css(styles.title)}>{ house.title }</h4>
        <ImageDefault src={house.images[0]} missing_url="//via.placeholder.com/350x150?No Image"/>
        <p className={css(styles.sub_title)} >{ house.description }</p>
      </div>
    );
  };
}
