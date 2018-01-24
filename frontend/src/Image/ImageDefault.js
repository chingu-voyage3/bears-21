import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';
import loadImage from './actions';

class ImageDefault extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    missing_url: PropTypes.string.isRequired
  };
  state = {
    image_error: false,
    image_src: null
  };
  component_unmounted = false;

  componentDidMount = () => {
    // data:image/jpeg;base64,data
    this.component_unmounted = false;
    const {src, missing_url} = this.props;
    if( src) {
      if( src.indexOf( '/') === -1){
        this.setState( {image_src: missing_url});
        // FIXME: we have to do this in a parent or re-render may cause
        // this component to be replaced by another before fetch returns
        loadImage( src)
        .then( url => {
          if( !this.component_unmounted) {
            this.setState( {image_src: url});
          }
        });
      } else {
        this.setState( {image_src: src});
      }
    } else {
      this.setState( {image_src: missing_url})
    }
  };
  componentWillUnmount = () => {
    this.component_unmounted = true;
  };
  componentWillReceiveProps = newProps => {
    if( newProps.src !== this.state.image_src){
      this.setState( {image_src: newProps.src, image_error: false});
    }
  };
  onImageError = () => {
    this.setState( {image_error: true, image_src: this.props.missing_url});
  };
  render = () => {
    const {missing_url} = this.props;
    const {image_error, image_src} = this.state;
    return (
      <div>
        { image_error
          ? <img className={css(styles.image)} src={missing_url} alt="noimage"/>
          : <img className={css(styles.image)}
              src={image_src}
              alt="noimage"
              onError={this.onImageError}
            />
        }
      </div>
    );
  };
}

const styles = StyleSheet.create({
  image: {
    borderRadius: '4px 4px 0 0',
    width: '100%',
    padding: '0'
  }
});

export default ImageDefault;
