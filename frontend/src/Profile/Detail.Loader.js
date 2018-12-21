import React from 'react';
import styled from 'styled-components';

const Detail = () => (
  <Wrapper>
    <LeftGrid>
      <Label />
    </LeftGrid>
    <RightGrid>
      <Item />
    </RightGrid>
    <LeftGrid>
      <Label />
    </LeftGrid>
    <RightGrid>
      <Item />
    </RightGrid>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0 2rem;
  display: grid;
  align-items: baseline;
  flex: 1;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 2rem 2rem 2rem;
  grid-gap: 8px;
`;

const Item = styled.div`
  width: 200px;
  height: 2rem;
  background: grey;
  border-radius: 5px;
`;

const Label = styled.div`
  width: 100px;
  height: 2rem;
  background: grey;
  border-radius: 5px;
`;

const RightGrid = styled.div`
  padding: 1rem 0 1rem 0;
  grid-column: 2 / 3;
`;

const LeftGrid = styled.label`
  padding: 1rem 0 1rem 0;
  line-height: 1.5em;
  text-align: right;
  grid-column: 1 / 2;
  font-weight: bold;
`;

export default Detail;
