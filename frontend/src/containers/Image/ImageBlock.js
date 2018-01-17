import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Uploader} from '../Uploader';
import {css} from 'aphrodite';
import styles from './styles';

export default class ImageBlock extends Component {
  static propTypes = {
    addImage: PropTypes.func.isRequired
  };
  state = {
    uploader_visible: false
  };
  toggleUploaderVisibility = () => {
    this.setState( { uploader_visible: !this.state.uploader_visible});
  };
  render = () => {
    const show_uploader = {
      display: this.state.uploader_visible?"flex":"none"
    };
    return (
      <div>
        <div className={css(styles.image_title)}>
          Images <button onClick={this.toggleUploaderVisibility} >+</button>
        </div>
        <div style={show_uploader} >
          <Uploader addImage={this.props.addImage}/>
        </div>
      </div>
    );
  };
}