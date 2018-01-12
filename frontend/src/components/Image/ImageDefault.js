import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';
import styles from './styles';

export default class ImageDefault extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    missing_url: PropTypes.string.isRequired
  };
  state = {
    image_error: false,
    image_src: this.props.missing_url
  };
  componentWillMount = () => {
    // data:image/jpeg;base64,data
    const {src} = this.props;
    if( src) {
      if( src.indexOf( '/') === -1){
        fetch( `/api/v1/image/${src}`).then( response => {
          response.blob().then( blob => {
            const url = URL.createObjectURL(blob);
            this.setState( {image_src: url});
          });
        });
      } else {
        this.setState( {image_src: src});
      }
    }
  };
  componentWillReceiveProps = (props) => {
    if( props.src !== this.props.src){
      this.setState( {image_error: false});
    }
  };
  onImageError = (e) => {
    console.log( "image error for url:", e.target.src);
    this.setState( {image_error: true, image_src: this.props.missing_url});
  };
  render = () => {
    const {missing_url} = this.props;
    const {image_error, image_src} = this.state;
    return (
      <div>
        {image_error?
          <img className={css(styles.image_box)} src={missing_url} alt="noimage"/>
          :
          <img className={css(styles.image_box)} src={image_src} alt="noimage" onError={this.onImageError} />
        }
      </div>
    );
  };
};
