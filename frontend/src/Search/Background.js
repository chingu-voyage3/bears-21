import React from 'react';
import styled from 'styled-components';

const Background = () => (
  <Image
    src="http://lorempixel.com/1000/600/abstract"
    className={css(styles.img)}
    alt="background"
  />
);

const Image = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  filter: blur(5px);
`;

export default Background;
