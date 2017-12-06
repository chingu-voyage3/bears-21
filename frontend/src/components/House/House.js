import React from 'react';
import {css} from 'aphrodite';
import S from './styles';

export default (props) => {
  return (
    <div className={css(S.house_wrapper)}>
      <img src={props.src} alt="noimg" />
      <div>
        House
      </div>
    </div>
  );
};
