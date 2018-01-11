import React from 'react';
import ImageDefault from './ImageDefault';

export default class ImageRemovable extends React.Component {
  onRemove = () => {
    this.props.removeImage( this.props.ndx);
  };
  render = () => {
    const {src} = this.props;
    const img_style = {
      maxWidth: "200px",
      maxHeight: "200px"
    };
    const close_button = {
      position: "absolute",
      top: "0px",
      right: "0px"
    };
    const wrapper = {
      position: "relative"
    };
    return (
      <div style={wrapper}>
        <div style={close_button}>
          <button type="button" onClick={this.onRemove} >X</button>
        </div>
        <ImageDefault src={src} missing_url="//via.placeholder.com/200x200?No Image" />
      </div>
    );
  };
};
