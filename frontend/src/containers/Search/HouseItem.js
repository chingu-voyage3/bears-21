import React from 'react';

const HouseItem = ({ house }) => (
  <div style={{
       display: "flex",
       flexDirection: "column",
       maxWidth: '200px',
       border: '1px solid black',
       borderRadius: '5px',
       background: '#fff',
       margin: '10px'
  }}>
    <h4 style={{padding: '6px', margin: '0'}}>{ house.title }</h4>
    { house.images.length > 0 ?
        <img src={house.images[0]} alt="noimg" /> :
        <img src="http://via.placeholder.com/350x150" alt="noimg" />
    }
    <p style={{padding: '6px'}}>{ house.description }</p>
  </div>
);

export default HouseItem;
