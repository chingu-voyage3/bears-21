import React from 'react';
import styled, { css } from 'styled-components';

const IssueListLoader = () => (
  <Wrapper>
    <Title />
    <List>
      <Item />
      <Item stronger />
      <Item weak />
    </List>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 10px;
  padding: 1em 0;
  width: 30%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.19);
`;

const List = styled.ul`
  width: 90%;
  margin: 0.5rem;
  padding: 0;
`;

const Item = styled.li`
  margin: 5px;
  padding: 0;
  list-style: none;
  height: 1.5rem;
  background: grey;
  border-radius: 5px;

  ${props =>
    props.weaker &&
    css`
      opacity: 0.2;
    `};

  ${props =>
    props.stronger &&
    css`
      opacity: 0.6;
    `};
`;

const Title = styled.div`
  width: 40%;
  height: 1.5rem;
  background: grey;
  border-radius: 5px;
`;

export default IssueListLoader;
