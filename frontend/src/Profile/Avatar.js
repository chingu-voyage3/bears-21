import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ImageDefault} from '../Image';
import {Uploader} from '../Uploader';
import {StyleSheet, css} from 'aphrodite';
import loadImage from '../Image/actions';

class Avatar extends Component {
  state = {
    image_src: null
  };
  componentDidMount = () => {
    const src = this.props.image;
    // FIXME: this code is duplicated from ImageDefault. We now set the image as a
    // background in Dropzone which I only just sussed out, which means ImageDefault
    // isn't used (for Uploader). ImageDefault has an issue with loading images
    // (cf FIXME in file) so that needs refactoring and the image load done
    // higher up component chain.
    if( src.indexOf( '/') === -1){
      loadImage( src)
      .then( url => {
        this.setState( {image_src: url});
      });
    } else {
      this.setState( {image_src: src});
    }
  };
  render = () => {
    const {image_src} = this.state;
    const {name, localUser, changeImage} = this.props;
    return (
      <div className={css(styles.wrapper)}>
        {localUser
          ? <Uploader currentImage={image_src} addImage={changeImage} />
          : <ImageDefault src={image_src} missing_url='//via.placeholder.com/200x200?text=noimg' />
        }
        <p>{name}</p>
      </div>
    );
  };
}

Avatar.propTypes = {
  localUser: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  changeImage: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 1 200px'
  }
});

export default Avatar;
