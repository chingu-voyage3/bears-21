import React from 'react';
import HouseList from './HouseList';
import CardLoader from '../House/Card.Loader';
import styled, { css } from 'styled-components';

const SearchResultsLoader = () => {
  const house_list = [0, 0, 0, 0, 0, 0].map((d, i) => {
    return (
      <LoadingWrapper i={i} key={i}>
        <CardLoader />
      </LoadingWrapper>
    );
  });

  return (
    <Container>
      <Heading>Search results for post code XXX</Heading>
      <HouseList>{house_list}</HouseList>
    </Container>
  );
};

const LoadingWrapper = styled.div`
  ${props =>
    props.i &&
    css`
    opacity: {1 - parseInt(props.i / 2, 10)  * 0.4}
  `};
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-weight: 500;
  font-size: 22px;
  color: #262637;
`;

export default SearchResultsLoader;
