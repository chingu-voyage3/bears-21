import React from 'react';
import PropTypes from 'prop-types';
import AutoCompleteItem from './AutoCompleteItem';
import styled from 'styled-components';

const AutoCompleteList = ({ items = [] }) => {
  const listItems = items.map((item, idx) => (
    <AutoCompleteItem key={idx} {...item} />
  ));
  return (
    <Wrapper>
      <List>{listItems}</List>
    </Wrapper>
  );
};

AutoCompleteList.propTypes = {
  items: PropTypes.array
};

const Wrapper = styled.div`
  position: absolute;
  top: 290px;
  z-index: 1000;
`;

const List = styled.ul`
  background: #fff;
  margin: 0;
  padding: 0;
  position: relative;
  width: 280px;
  list-style: none;
  max-height: 300px;
  overflow-x: hidden;
`;

export default AutoCompleteList;
