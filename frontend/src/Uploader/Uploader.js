import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageDropper from './ImageDropper';
import UrlInput from './UrlInput';
import { ReloadButton } from '../Common/Buttons';
import styled from 'styled-components';

export default class Uploader extends Component {
  static propTypes = {
    currentImage: PropTypes.string,
    addImage: PropTypes.func.isRequired
  };
  state = {
    show_image: false,
    url_text: '',
    image_src: ''
  };
  componentWillMount = () => {
    const { currentImage } = this.props;
    if (currentImage) {
      this.setState({ image_src: currentImage, show_image: true });
    }
  };
  componentWillReceiveProps = newProps => {
    if (newProps.currentImage) {
      this.setState({ image_src: newProps.currentImage, show_image: true });
    }
  };
  onFileDropped = files => {
    this.setState({
      show_image: true,
      image_src: URL.createObjectURL(files[0])
    });
    this.props.addImage(files[0]);
  };
  onUrlChange = e => {
    this.setState({ url_text: e.target.value });
  };
  setPicUrl = () => {
    this.setState({
      show_image: true,
      image_src: this.state.url_text
    });
    this.props.addImage(this.state.url_text);
  };
  handleUrlKeyUp = e => {
    if (e.keyCode === 13) {
      this.setPicUrl();
    }
  };
  render = () => {
    const missing_url = 'via.placeholder.com/200x200?text=No Image';
    const { image_src, url_text, show_image } = this.state;
    const url = image_src ? image_src : missing_url;
    return (
      <Wrapper>
        <ImageDropper
          url={url}
          show_image={show_image}
          missing_url={`${missing_url}`}
          onFileDropped={this.onFileDropped}
        />
        <UrlInput
          value={url_text}
          onUrlChange={this.onUrlChange}
          handleUrlKeyUp={this.handleUrlKeyUp}
        />
        <ButtonWrapper>
          <ReloadButton onClick={this.setPicUrl} title="Preview image" />
        </ButtonWrapper>
      </Wrapper>
    );
  };
}

const Wrapper = styled.div`
  padding: 0 10px;
  border: 2px solid darkgrey;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 #ccc;
  background: lightgrey;
  max-width: 240px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 0.8rem;
`;
