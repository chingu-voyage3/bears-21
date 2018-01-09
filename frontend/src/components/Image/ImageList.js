import React from 'react';
import ImageRemovable from './ImageRemovable';

export default class ImageList extends React.Component {
  removeImage = (ndx) => {
    this.props.removeImage( ndx);
  };
  render = () => {
    const image_style = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap"
    }
    const image_list = this.props.images.map( (img, i) => {
      let src;
      if( typeof img === "string"){
        src = img;
      } else {
        src = img.preview;
      }
      return (
        <ImageRemovable src={src} key={i} ndx={i} removeImage={this.removeImage} />
      );
    });
    return (
      <div style={image_style} >
        {image_list}
      </div>
    );
  };
};
