import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Uploader } from '../Uploader';
import { PlusButton } from '../Common/Buttons';
import styled, { css } from 'styled-components';

export default class ImageBlock extends Component {
  static propTypes = {
    addImage: PropTypes.func.isRequired
  };
  state = {
    uploader_visible: false
  };
  toggleUploaderVisibility = () => {
    this.setState({ uploader_visible: !this.state.uploader_visible });
  };
  render = () => {
    return (
      <div>
        <Header>
          Images
          <PlusButton
            onClick={this.toggleUploaderVisibility}
            title="Toggle Image Uploader"
          />
        </Header>
        <UploaderStyle show={this.state.uploader_visible}>
          <Uploader addImage={this.props.addImage} />
        </UploaderStyle>
      </div>
    );
  };
}

const UploaderStyle = styled.div`
  display: none;
  ${props =>
    props.show &&
    css`
      display: flex;
    `};
`;

const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: baseline;
`;
