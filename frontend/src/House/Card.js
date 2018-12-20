import React from 'react';
import PropTypes from 'prop-types';
import { ImageDefault } from '../Image';
import Rating from '../Rating';
import styled from 'styled-components';

const Card = props => (
  <Container>
    <ImageDefault
      src={props.house.images[0]}
      missing_url="//via.placeholder.com/350x150?text=No Image"
    />
    <Title>
      {props.house.title}
      <Rating
        currentRating={props.house.rating}
        type="house"
        parent_id={props.house._id}
      />
    </Title>
    <Content>{props.house.description}</Content>
  </Container>
);

Card.propTypes = {
  house: PropTypes.object.isRequired
};

const Container = styled.div`
  background: #fefff9;
  box-shadow: rgba(0, 0, 0, 0.19) 0 0 8px 0;
  border-radius: 4px;
  color: #363636;
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 320px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 0;
  padding: 1% 2.5%;
  line-height: 1.2;
  background: rgba(157, 187, 63, 0.85);
  color: white;
  bottom: 0;
  width: 100%;
`;

const Content = styled.p`
  padding: 5% 5% 3% 5%;
`;

export default Card;
