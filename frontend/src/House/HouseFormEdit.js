import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export default class HouseFormEdit extends Component {
  static propTypes = {
    house: PropTypes.object.isRequired,
    onFieldChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };
  state = {
    uploader_visible: false
  };
  toggleUploaderViz = () => {
    this.setState({ uploader_visible: !this.state.uploader_visible });
  };

  render = () => {
    const { house, onFieldChange, onSubmit } = this.props;
    return (
      <Form action="">
        <LeftGridLabel>Title</LeftGridLabel>
        <RightGridInput
          name="title"
          type="text"
          placeholder="Title"
          value={house.title}
          onChange={onFieldChange}
        />

        <LeftGridLabel>Street</LeftGridLabel>
        <RightGridInput
          name="location.street"
          type="text"
          placeholder="Street"
          value={house.location.street}
          onChange={onFieldChange}
        />

        <LeftGridLabel>Post Code</LeftGridLabel>
        <RightGridInput
          name="location.postCode"
          type="text"
          placeholder="Post Code"
          value={house.location.postCode}
          onChange={onFieldChange}
        />

        <LeftGridLabel>Description</LeftGridLabel>
        <RightGridTextarea
          name="description"
          rows="6"
          cols="32"
          placeholder="Description"
          value={house.description}
          onChange={onFieldChange}
        />

        <RightGridButton onClick={onSubmit} type="button">
          Save
        </RightGridButton>
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

const LeftGridLabel = styled.label`
  line-height: 1.5em;
  text-align: right;
  grid-column: 1 / 2;
`;

const SharedRightGrid = css`
  grid-column: 2 / 3;
`;

const RightGridButton = styled.button`
  ${SharedRightGrid};
`;

const RightGridInput = styled.input`
  ${SharedRightGrid};
`;

const RightGridTextarea = styled.textarea`
  ${SharedRightGrid};
`;
