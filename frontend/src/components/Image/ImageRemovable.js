import React from 'react';
import PropTypes from 'prop-types';
import ImageDefault from './ImageDefault';
import {css} from 'aphrodite';
import styles from './styles';

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
