import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';

import ImageDropper from './ImageDropper';
import UrlInput from './UrlInput';
import { ReloadButton } from '../Common/Buttons';
import { StyleSheet, css } from 'aphrodite';

export default class Uploader extends Component {
  static propTypes = {
    currentImage: PropTypes.string,
    addImage: PropTypes.func.isRequired
  };
  state = {
    show_image: false,
    url_text: "",
    image_src: ""
  };
  componentWillMount = () => {
    const {currentImage} = this.props;
    if (currentImage) {
      this.setState( {image_src: currentImage, show_image: true});
    }
  };
  componentWillReceiveProps = newProps => {
    if( newProps.currentImage) {
      this.setState( {image_src: newProps.currentImage, show_image: true});
    }
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
  render = () => {
    const missing_url = "via.placeholder.com/200x200?text=No Image";
    const {image_src, url_text, show_image} = this.state;
    const url = image_src?image_src:missing_url;
    return (
      <Card>
        <ImageDropper url={url}
          show_image={show_image}
          missing_url={`${missing_url}`}
          onFileDropped={this.onFileDropped} />
        <CardContent>
          <UrlInput value={url_text}
            onUrlChange={this.onUrlChange}
            handleUrlKeyUp={this.handleUrlKeyUp}/>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={this.setPicUrl}>Preview Image </Button>
        </CardActions>
      </Card>
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
    justifyContent: "space-around",
    fontSize: "0.8em"
  }
});
