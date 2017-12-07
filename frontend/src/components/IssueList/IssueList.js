import React from 'react';
import {css} from 'aphrodite';
import styles from './styles';

export default (props) => {
  const items = props.items.map( (item, i) => (
    <li className={css(styles.issue_style)} key={i}>
      {item.title}
    </li>
  ));
  return (
    <div className={css(styles.column_wrapper)}>
      <div className={css(styles.title)}>
        {props.title}
      </div>
      <ul>
        {items}
      </ul>
    </div>
  );
};
