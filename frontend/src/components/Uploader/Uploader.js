import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import {ImageDefault} from '../Image';
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
    const {image_src, url_text} = this.state;
    const reload_symbol = String.fromCharCode( 8635);
    const cross_symbol = String.fromCharCode( 10799);
    const url = image_src?image_src:missing_url;

    return (
      <div className={css(styles.wrapper)} >
        <div className={css(styles.well)}>
          { this.state.show_image
            ? <ImageDefault className={css( styles.image_style)} src={url}
                missing_url="//via.placeholder.com/200x200?text=noimage"/>
            : <Dropzone onDrop={this.onFileDropped} >
                Drop files here or click to select.
                Alternatively specify url to an online image in the url box
                below and click preview button {reload_symbol}
              </Dropzone>
          }
        </div>
        <div className={css(styles.ip_wrapper)} >
          Url
          <input type="text" value={url_text}
            onChange={this.onUrlChange}
            onKeyUp={this.handleUrlKeyUp}/>
        </div>
        <div className={css(styles.btn_wrapper)}>
          <button type="button" onClick={this.setPicUrl} title="Preview image" >
            {reload_symbol}
          </button>
          <button type="button" onClick={this.onClearPic} title="Clear preview" >
            {cross_symbol}
          </button>
        </div>
      </div>
    );
  };
}

const styles = StyleSheet.create({
  wrapper: {
    padding: "0px 20px",
    border: "2px solid darkgrey",
    borderRadius: "10px",
    boxShadow: "0px 0px 8px 0 #ccc",
    background: "lightgrey",
    maxWidth: "240px"
  },
  well: {
    margin: "5px auto",
    // padding: "10px",
    // paddingBottom: "10px",
    // marginBottom: "0px"
  },
  image_style: { maxWidth: "215px", maxHeight: "215px" },
  ip_wrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  btn_wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "0.8em",
    margin: "1em"
  }
});
