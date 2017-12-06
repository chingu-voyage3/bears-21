import React from 'react';
import {css} from 'aphrodite';
import S from './styles';

export default (props) => {
  const items = props.items.map( (item, i) => (
    <li className={css(S.issue_style)} key={i}>
      {item.title}
    </li>
  ));
  return (
    <div className={css(S.column_wrapper)}>
      <div className={css(S.title)}>
        {props.title}
      </div>
      <ul>
        {items}
      </ul>
    </div>
  );
};
