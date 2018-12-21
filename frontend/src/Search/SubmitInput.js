import React from 'react';
import styled from 'styled-components';

const SubmitInput = props => <Input type="submit" value="search" {...props} />;
export default SubmitInput;

const Input = styled.input`
  border: 0;
  margin: 0;
  padding: 10px;
  line-height: 50px;
  font-size: 20px;
  border-radius: 0;
  outline: 0;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  background: #ff5a5f;
  border-top: 1px solid #ff5a5f;
  border-bottom: 1px solid #ff5a5f;
  color: white;
  flex-basis: 500px;
`;
