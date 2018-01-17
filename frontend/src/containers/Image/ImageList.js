import React from 'react';
import PropTypes from 'prop-types';
import ImageRemovable from './ImageRemovable';
import {StyleSheet, css} from 'aphrodite';

export default class ImageList extends React.Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    removeImage: PropTypes.func.isRequired
  };
  removeImage = (ndx) => {
    this.props.removeImage( ndx);
  };
  render = () => {
    const image_list = this.props.images.map( (img, i) => {
      let src;
      if( typeof img === "string"){
        src = img;
      } else {
        src = img.preview;
      }
      return (
        <ImageRemovable src={src} key={i} image_id={i} removeImage={this.removeImage} />
      );
    });
    return (
      <div className={css(styles.wrapper)} >
        {image_list}
      </div>
    );
  };
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "10px"
  }
});