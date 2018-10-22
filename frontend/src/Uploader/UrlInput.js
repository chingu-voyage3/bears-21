import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const UrlInput = props => (
  <div className={css(styles.wrapper)}>
    Url
    <input
      type="text"
      value={props.url_text}
      onChange={props.onUrlChange}
      onKeyUp={props.handleUrlKeyUp}
    />
  </div>
);
UrlInput.propTypes = {
  url_text: PropTypes.string,
  onUrlChange: PropTypes.func.isRequired,
  handleUrlKeyUp: PropTypes.func.isRequired
};
export default UrlInput;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
