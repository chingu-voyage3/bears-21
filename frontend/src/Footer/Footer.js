import styled from 'styled-components';
import React from 'react';

const Footer = styled.footer`
  display: flex;
  justify-content: stretch;
  align-content: stretch;
  flex: auto;
  position: relative;
  padding: 32px;
  justify-content: center;
`;

export default () => (
  <Footer>
    <section>
      Made by bears-21 with{' '}
      <span role="img" aria-label="heart">
        ❤️{' '}
      </span>
    </section>
  </Footer>
);
