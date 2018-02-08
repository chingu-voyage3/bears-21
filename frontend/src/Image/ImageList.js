import React from 'react';
import PropTypes from 'prop-types';
import ImageDefault from './ImageDefault';
import {StyleSheet, css} from 'aphrodite';

export default class ImageList extends React.Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  };
  render = () => {
    const image_list = this.props.images.map( img => {
      let src;
      if( typeof img === "string"){
        src = img;
      } else {
        src = img.preview;
      }
      return (
        <div className={css(styles.wrapper)} key={src}>
          <ImageDefault src={src} missing_url="//via.placeholder.com/200x200?text=no image" />
        </div>
      );
    });
    return (
      <div className={css(styles.container)} >
        {image_list}
      </div>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "10px"
  },
  wrapper: {
    padding: "0px 20px",
    border: "2px solid darkgrey",
    borderRadius: "10px",
    boxShadow: "0px 0px 8px 0 #ccc",
    background: "lightgrey",
    maxWidth: "220px"
  }
});
