import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';
import Dropzone from 'react-dropzone';

const getDropzoneStyle = (show_image, url) => {
  return {
    width: "200px",
    height: "200px",
    backgroundPosition: "center",
    backgroundImage: show_image? `url( ${url})`: '',
    backgroundSize: '200px, auto, contain',
    backgroundRepeat: 'no-repeat'
  };
};
const reload_symbol = String.fromCharCode( 8635);
const ImageDropper = (props) => (
  <div className={css(styles.well)}>
    <Dropzone onDrop={props.onFileDropped}
        style={getDropzoneStyle(props.show_image, props.url)} >
      {props.show_image
          ? ""
          : `Drop files here or click to select.\
              Alternatively specify url to an online image in the url box\
              below and click preview button ${reload_symbol}`
      }
    </Dropzone>
  </div>
);

ImageDropper.propTypes = {
  url: PropTypes.string,
  show_image: PropTypes.bool.isRequired,
  onFileDropped: PropTypes.func.isRequired
};

export default ImageDropper;

const styles = StyleSheet.create({
  image_style: {
    maxWidth: "200px",
    maxHeight: "200px"
  },
  well: {
    padding: "10px",
    paddingBottom: "10px",
    marginBottom: "0px"
  },
});
