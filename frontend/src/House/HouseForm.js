import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export default class HouseForm extends Component {
  static propTypes = {
    house: PropTypes.object.isRequired
  };

  render = () => {
    const { house } = this.props;
    return (
      <Form action="">
        <LeftGrid>Title</LeftGrid>
        <RightGridLabel
          name="title"
          type="text"
          placeholder="Title"
          disabled="disabled"
          value={house.title}
        />

        <LeftGrid>Street</LeftGrid>
        <RightGridLabel
          name="location.street"
          type="text"
          placeholder="Street"
          disabled="disabled"
          value={house.location.street}
        />

        <LeftGrid>Post Code</LeftGrid>
        <RightGridLabel
          name="location.postCode"
          type="text"
          placeholder="Post Code"
          disabled="disabled"
          value={house.location.postCode}
        />

        <LeftGrid>Description</LeftGrid>
        <RightGridText
          name="description"
          rows="6"
          cols="32"
          placeholder="Description"
          disabled="disabled"
          value={house.description}
        />
      </Form>
    );
  };
}

const Form = styled.form`
  margin: 10px auto;
  max-width: 600px;
  display: grid;
  align-items: baseline;
  grid-template-columns: 100px 1fr;
  grid-gap: 8px;
`;

const LeftGrid = styled.label`
  line-height: 1.5em;
  text-align: right;
  grid-column: 1 / 2;
`;

const sharedGrid = css`
  grid-column: 2 / 3;
`;

const RightGridLabel = styled.input`
  ${sharedGrid};
`;

const RightGridText = styled.textarea`
  ${sharedGrid};
`;
