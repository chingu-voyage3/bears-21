import React from 'react';

const HouseList = ({ children }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', width: '800px', justifyContent: 'center' }}>
    {children}
  </div>
);

export default HouseList;
