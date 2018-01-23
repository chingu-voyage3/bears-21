import React from 'react';
import PropTypes from 'prop-types';
import ImageDefault from './ImageDefault';
import {StyleSheet, css} from 'aphrodite';
import {CrossButton} from '../Common/Buttons';

export default class ImageRemovable extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    removeImage: PropTypes.func.isRequired
  };
  onRemove = () => {
    this.props.removeImage( this.props.src);
  };
  render = () => {
    const {src} = this.props;
    return (
      <div className={css(styles.wrapper)} >
        <div className={css(styles.close_button)} >
          <CrossButton onClick={this.onRemove} title="Remove Image" />
        </div>
        <ImageDefault src={src} missing_url="//via.placeholder.com/200x200?No Image" />
      </div>
    );
  };
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    padding: "0px 20px",
    border: "2px solid darkgrey",
    borderRadius: "10px",
    boxShadow: "0px 0px 8px 0 #ccc",
    background: "lightgrey",
    maxWidth: "220px"
  },
  cross_box_colour: {
    background: "tomato" // "linear-gradient( to top, #49CF87, #40C080)"
  },
  close_button: {
    position: "absolute",
    top: "0px",
    right: "0px"
  }
});
