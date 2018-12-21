import React from 'react';
import PropTypes from 'prop-types';
import { ImageDefault } from '../Image';
import { RatingSummary } from '../Rating';
import styled from 'styled-components';

// <h4 style={{margin: '0', padding: '0 3.5%', lineHeight: '1.2'}}>{house.title}</h4>
const HouseItem = ({ house }) => (
  <Container>
    <ImageDefault
      src={house.images[0]}
      missing_url="http://via.placeholder.com/350x150"
    />
    <Title>
      <RatingSummary value={house.rating} />
      {house.title}
    </Title>
    <Content>{house.description}</Content>
  </Container>
);

HouseItem.propTypes = {
  house: PropTypes.object.isRequired
};

const Container = styled.div`
  cursor: pointer;
  background: #fefff9;
  box-shadow: rgb(0, 0, 0, 0.19) 0 0 8px 0;
  border-radius: 4px;
  color: #363636;
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 320px;
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 0;
  padding: 0 2.5%;
  line-height: 1.2;
  background: rgb(157, 187, 63, 0.85);
  color: white;
  bottom: 0;
  width: 100%;
`;

const Content = styled.p`
  padding: 5% 5% 3% 5%;
`;

export default HouseItem;
