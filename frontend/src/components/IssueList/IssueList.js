import React from 'react';
import './style.css';

export default (props) => (
  <div className="column_wrapper">
    <div>
      {props.title}
    </div>
    <ul>
      {props.items}
    </ul>
  </div>
);
