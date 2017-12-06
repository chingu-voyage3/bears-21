import React from 'react';
import {css} from 'aphrodite';
import S from './styles';

export default (props) => {
  return (
    <div>
      <img src={props.src} alt="noimg" />
      <div className={css(S.title)}>
        House
      </div>
    </div>
  );
};
