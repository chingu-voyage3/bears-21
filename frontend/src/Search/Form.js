import React from 'react';
import styled from 'styled-components';

export default props => <StyledForm {...props} />;

const StyledForm = styled.form`
  display: flex;
  border: 10px solid rgbd(0, 0, 0, 0.3);
  border-radius: 5px;
  z-index: 10;
`;
