import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AutoCompleteItem = ({ link, text }) => (
  <List>
    <Anchor href={link}>{text}</Anchor>
  </List>
);

AutoCompleteItem.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string
};

const Anchor = styled.a`
  color: black;
  text-decoration: none;
`;

const List = styled.li`
  background: #fff;
  padding: 1rem 1rem;
  border-bottom: 1px solid #d8d8d8;
`;

export default AutoCompleteItem;
