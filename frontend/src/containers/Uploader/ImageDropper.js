import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';
import Dropzone from 'react-dropzone';
import {ImageDefault} from '../Image';

const reload_symbol = String.fromCharCode( 8635);
const ImageDropper = (props) => (
  <div className={css(styles.well)}>
    { props.show_image
      ? <ImageDefault className={css( styles.image_style)} src={props.url}
          missing_url="//via.placeholder.com/200x200?text=noimage"/>
        : <Dropzone onDrop={props.onFileDropped} >
        Drop files here or click to select.
        Alternatively specify url to an online image in the url box
        below and click preview button {reload_symbol}
      </Dropzone>
  }
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
