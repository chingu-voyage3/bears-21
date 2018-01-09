import React from 'react';

export default class ImageRemovable extends React.Component {
  onRemove = () => {
    this.props.onRemove( this.props.ndx);
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
        <img src={src} style={img_style} alt="" />;
      </div>
    );
  };
};
