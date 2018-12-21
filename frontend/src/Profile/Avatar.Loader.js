import React from 'react';
import styled from 'styled-components';

const AvatarLoader = () => (
  <Wrapper>
    <Uploader />
    <Name />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Uploader = styled.div`
  width: 200px;
  height: 200px;
  background: lightgrey;
`;

const Name = styled.div`
  margin: 10px;
  width: 100px;
  height: 1.2rem;
  background: lightgrey;
`;

export default AvatarLoader;
