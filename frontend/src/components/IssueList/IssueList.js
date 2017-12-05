import React from 'react';
import S from './style.css';

export default (props) => (
  <div style={S.column_wrapper}>
    <div>
      {props.title}
    </div>
    <ul>
      {props.items}
    </ul>
  </div>
);
