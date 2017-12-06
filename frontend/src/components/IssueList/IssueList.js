import React from 'react';
import {css} from 'aphrodite';
import S from './styles';

export default (props) => (
  <div className={css(S.column_wrapper)}>
    <div>
      {props.title}
    </div>
    <ul>
      {props.items}
    </ul>
  </div>
);
