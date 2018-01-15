import React from 'react';
import PropTypes from 'prop-types';
import ImageDefault from './ImageDefault';
import {StyleSheet, css} from 'aphrodite';

export default class ImageRemovable extends React.Component {
  static propTypes = {
    image_id: PropTypes.number, // new images don't have ids before save
    src: PropTypes.string,
    removeImage: PropTypes.func.isRequired
  };
  onRemove = () => {
    this.props.removeImage( this.props.image_id);
  };
  render = () => {
    const {src} = this.props;
    const cross_symbol = String.fromCharCode( 10799);
    return (
      <div className={css(styles.wrapper)} >
        <div className={css(styles.close_button)} >
          <button type="button"
            className={css(styles.cross_box_colour)}
            onClick={this.onRemove} >
            {cross_symbol}
          </button>
        </div>
        <ImageDefault src={src} missing_url="//via.placeholder.com/200x200?No Image" />
      </div>
    );
  };
}

const styles = StyleSheet.create({
  wrapper: {
    padding: "0px 20px",
    border: "2px solid darkgrey",
    borderRadius: "10px",
    boxShadow: "0px 0px 8px 0 #ccc",
    background: "lightgrey",
    maxWidth: "220px"
  },
  well: {
    padding: "10px",
    paddingBottom: "10px",
    marginBottom: "0px"
  },
  image_style: { maxWidth: "215px", maxHeight: "215px" },
  ip_wrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  btn_wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "0.8em",
    margin: "1em"
  }
});
