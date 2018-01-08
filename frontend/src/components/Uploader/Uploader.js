import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import ImageDefault from './ImageDefault';
import {css} from 'aphrodite';
import styles from './styles';

export default class Uploader extends Component {
  state = {
    show_image: false,
    url_text: "",
    image_src: "",
    images: []
  };
  onFileDropped = (files) => {
    // TODO: add files to images[]
    console.log( "files:", files);
    this.setState( {
      show_image: true,
      image_src: URL.createObjectURL(files[0])
    });
    this.props.addImage( URL.createObjectURL(files[0]));
  };
  onUrlChange = (e) => {
    this.setState( {url_text: e.target.value});
  };
  setPicUrl = () => {
    console.log( "image url:", this.state.url_text);
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
};
