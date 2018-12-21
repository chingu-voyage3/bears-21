import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export default class IssueForm extends React.Component {
  static propTypes = {
    issue: PropTypes.object.isRequired,
    onFieldChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };
  render() {
    const { issue, onFieldChange, onSubmit } = this.props;
    return (
      <Form action="">
        <LeftGrid>Issue</LeftGrid>
        <RightGridInput
          name="title"
          type="text"
          placeholder="Title"
          value={issue.title}
          onChange={onFieldChange}
        />

        <LeftGrid>Type</LeftGrid>
        <SelectStyle name="type" value={issue.type} onChange={onFieldChange}>
          <option value="a">type a</option>
          <option value="b">type b</option>
        </SelectStyle>

        <LeftGrid>Priority</LeftGrid>
        <SelectStyle
          name="priority"
          value={issue.priority}
          onChange={onFieldChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </SelectStyle>

        <LeftGrid>Status</LeftGrid>
        <SelectStyle
          name="status"
          value={issue.status}
          onChange={onFieldChange}
        >
          <option value="open">Open</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
        </SelectStyle>

        <LeftGrid>Description</LeftGrid>
        <textarea
          name="description"
          rows="6"
          cols="32"
          placeholder="Description"
          value={issue.description}
          onChange={onFieldChange}
        />
        <RightGridButton onClick={onSubmit} type="button">
          Save
        </RightGridButton>
      </Form>
    );
  }
}

const RightGrid = css`
  grid-column: 2 / 3;
`;

const SelectStyle = styled.select`
  width: 120px;
  height: 2em;
  border-radius: 3px;
  overflow: hidden;
  background: white;
  ${RightGrid};
`;

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

const RightGridButton = styled.button`
  ${RightGrid};
`;

const RightGridInput = styled.input`
  ${RightGrid};
`;
