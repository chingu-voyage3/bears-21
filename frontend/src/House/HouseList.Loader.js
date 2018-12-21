import React from 'react';
import CardLoader from './Card.Loader';
import IssueListLoader from '../Issue/IssueList.Loader';
import styled, { css } from 'styled-components';

const DUMMYARRAY = [0, 0, 0];

const HouseListLoader = () => (
  <div>
    {DUMMYARRAY.map((d, i) => (
      <Container i={i} key={i}>
        <CardLoader />
        <IssueListLoader />
        <IssueListLoader />
      </Container>
    ))}
  </div>
);

const Container = styled.div`
  display: flex;
  justify-content: center;

  ${props =>
    props.i &&
    css`
      opactiy: ${1 - props.i * 0.4};
    `};
`;

export default HouseListLoader;
