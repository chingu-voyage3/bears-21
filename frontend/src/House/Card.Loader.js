import React from 'react';
import styled from 'styled-components';

const CardLoader = () => (
  <Container>
    <GreyedImage />
    <GreyedTitle />
    <GreyedDescription />
  </Container>
);

const GreyedImage = styled.div`
  width: 100%;
  height: 200px;
  background: lightgrey;
`;

const Container = styled.div`
  background: snow;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 320px;
`;

const GreyedTitle = styled.div`
  width: 100%;
  height: 3rem;
  background: lightgrey;
  margin-top: 10px;
`;

const GreyedDescription = styled.div`
  width: 100%;
  height: 4rem;
  background: lightgrey;
  margin-top: 10px;
`;

export default CardLoader;
