import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Detail = ({ data, localUser, onFieldChange }) => (
  <Wrapper>
    <LeftGrid>Name</LeftGrid>
    <RightGrid>
      {localUser ? (
        <input name="name" value={data.name} onChange={onFieldChange} />
      ) : (
        data.name
      )}
    </RightGrid>
    <LeftGrid>Email</LeftGrid>
    <RightGrid>
      {localUser ? (
        <input name="email" value={data.email} onChange={onFieldChange} />
      ) : (
        data.email
      )}
    </RightGrid>
  </Wrapper>
);

Detail.propTypes = {
  localUser: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired
};

const Wrapper = styled.div`
  margin: 0 2rem;
  display: grid;
  align-items: baseline;
  flex: 1;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 2rem 2rem 2rem;
  grid-gap: 8px;
`;

const LeftGrid = styled.label`
  padding: 1rem 0 1rem 0;
  line-height: 1.5rem;
  text-align: right;
  grid-column: 1 / 2;
  font-weight: bold;
`;

const RightGrid = styled.div`
  padding: 1rem 0 1rem 0;
  grid-column: 2 / 3;
`;

export default Detail;
