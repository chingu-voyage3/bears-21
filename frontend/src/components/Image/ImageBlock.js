import React from 'react';
import {Uploader} from '../Uploader';
import ImageList from './ImageList';

export default class ImageBlock extends React.Component {
  state = {
    uploader_visible: false
  };
  toggleUploaderViz = () => {
    this.setState( { uploader_visible: !this.state.uploader_visible});
  };
  render = () => {
    const show_uploader = {
      display: this.state.uploader_visible?"flex":"none"
    };
    return (
      <div>
        <div className="image_title">
          Images <button onClick={this.toggleUploaderViz} >+</button>
        </div>
        <div className="upload_wrapper" style={show_uploader} >
          <Uploader addImage={this.props.addImage}/>
        </div>
        <div className="images_wrapper">
          <ImageList images={this.props.images} removeImage={this.props.removeImage} />
        </div>
      </div>
    );
  };
};
