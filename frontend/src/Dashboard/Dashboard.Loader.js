import React from 'react';
import HouseListLoader from '../House/HouseList.Loader';
import styled from 'styled-components';

const DashboardLoader = () => (
  <div style={{ flex: '1' }}>
    <h1>Dashboard</h1>
    <StyledButton type="button" disabled={true} />
    <HouseListLoader />
  </div>
);

const StyledButton = styled.button`
  width: 80px;
  height: 1.5rem;
  background: lightgrey;
  border-radius: 10px;
  &:hover {
    box-shadow: none;
  }
`;

export default DashboardLoader;
