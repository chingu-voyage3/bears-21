import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageDropper from './ImageDropper';
import UrlInput from './UrlInput';
import ReloadButton from './ReloadButton';
import CloseButton from './CloseButton';
import {StyleSheet, css} from 'aphrodite';

export default class Uploader extends Component {
  static propTypes = {
    addImage: PropTypes.func.isRequired
  };
  state = {
    show_image: false,
    url_text: "",
    image_src: ""
  };
  onFileDropped = (files) => {
    this.setState( {
      show_image: true,
      image_src: URL.createObjectURL(files[0])
    });
    this.props.addImage( files[0]);
  };
  onUrlChange = (e) => {
    this.setState( {url_text: e.target.value});
  };
  setPicUrl = () => {
    this.setState( {
      show_image: true,
      image_src: this.state.url_text,
    });
    this.props.addImage( this.state.url_text);
  };
  handleUrlKeyUp = (e) => {
    if( e.keyCode === 13){
      this.setPicUrl();
    }
  };
  onClearPic = () => {
    this.setState( {show_image: false});
  };
  render = () => {
    const missing_url = "//via.placeholder.com/200x200?text=No Image";
    const {image_src, url_text, show_image} = this.state;
    const url = image_src?image_src:missing_url;

    return (
      <div className={css(styles.wrapper)} >
        <ImageDropper url={url}
          show_image={show_image}
          missing_url="//via.placeholder.com/200x200?text=noimage"
          onFileDropped={this.onFileDropped} />
        <UrlInput value={url_text}
          onUrlChange={this.onUrlChange}
          handleUrlKeyUp={this.handleUrlKeyUp}/>
        <div className={css(styles.btn_wrapper)}>
          <ReloadButton setPicUrl={this.setPicUrl} title="Preview image" />
          <CloseButton onClearPic={this.onClearPic} title="Clear preview" />
        </div>
      </div>
    );
  };
}

const styles = StyleSheet.create({
  wrapper: {
    padding: "0px 10px",
    border: "2px solid darkgrey",
    borderRadius: "10px",
    boxShadow: "0px 0px 8px 0 #ccc",
    background: "lightgrey",
    maxWidth: "240px"
  },
  btn_wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "0.8em",
    margin: "1em"
  }
});
