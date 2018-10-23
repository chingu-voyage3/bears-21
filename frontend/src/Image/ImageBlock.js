import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Uploader } from '../Uploader';
import { StyleSheet, css } from 'aphrodite';
import { PlusButton } from '../Common/Buttons';

export default class ImageBlock extends Component {
  static propTypes = {
    addImage: PropTypes.func.isRequired
  };
  state = {
    uploader_visible: false
  };
  toggleUploaderVisibility = () => {
    this.setState({ uploader_visible: !this.state.uploader_visible });
  };
  render = () => {
    const show_uploader = {
      display: this.state.uploader_visible ? 'flex' : 'none'
    };
    return (
      <div>
        <div className={css(styles.header)}>
          Images
          <PlusButton
            onClick={this.toggleUploaderVisibility}
            title="Toggle Image Uploader"
          />
        </div>
        <div style={show_uploader}>
          <Uploader addImage={this.props.addImage} />
        </div>
      </div>
    );
  };
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'baseline'
  }
});
