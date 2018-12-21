import React from 'react';
import AvatarLoader from './Avatar.Loader';
import DetailLoader from './Detail.Loader';
import styled from 'styled-components';

const ProfileLoader = () => (
  <Container>
    <Header>Profile</Header>
    <Wrapper>
      <AvatarLoader />
      <DetailLoader />
    </Wrapper>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const Header = styled.span`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const Wrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0 0 8px 0;
`;

export default ProfileLoader;
