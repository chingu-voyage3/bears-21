import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SYMBOL = String.fromCharCode(10799);

const CrossButton = props => (
  <ButtonStyle type="button" title={props.title} onClick={props.onClick}>
    {SYMBOL}
  </ButtonStyle>
);

CrossButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const ButtonStyle = styled.button`
  background: tomato;
`;

export default CrossButton;
