import React from 'react';
import PropTypes from 'prop-types';

const HouseList = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      width: '800px',
      justifyContent: 'center'
    }}
  >
    {children}
  </div>
);
HouseList.propTypes = {
  children: PropTypes.array
};

export default HouseList;
