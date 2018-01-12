import React from 'react';
import PropTypes from 'prop-types'
import ImageRemovable from './ImageRemovable';
import {css} from 'aphrodite';
import styles from './styles';

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
        <ImageRemovable src={src} key={i} ndx={i} removeImage={this.removeImage} />
      );
    });
    return (
      <div className={css(styles.image_box)} >
        {image_list}
      </div>
    );
  };
};
