import React from 'react';

export default (props) => {
  return (
    <div className="house_wrapper">
      <img src={props.src} alt="noimg" />
      <div>
        House
      </div>
    </div>
  );
};
