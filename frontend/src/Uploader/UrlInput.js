import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UrlInput = props => (
  <Container>
    Url
    <input
      type="text"
      value={props.url_text}
      onChange={props.onUrlChange}
      onKeyUp={props.handleUrlKeyUp}
    />
  </Container>
);
UrlInput.propTypes = {
  url_text: PropTypes.string,
  onUrlChange: PropTypes.func.isRequired,
  handleUrlKeyUp: PropTypes.func.isRequired
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default UrlInput;
