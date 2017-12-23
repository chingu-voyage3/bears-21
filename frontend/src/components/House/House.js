import React from 'react';
import {css} from 'aphrodite';
import styles from './styles';

export default (props) => {
  return (
    <div>
      <img src={props.src} alt="noimg" />
      <div className={css(styles.title)}>
        House
      </div>
    </div>
  );
};
