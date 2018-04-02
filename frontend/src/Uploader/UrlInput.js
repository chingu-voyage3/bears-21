import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const UrlInput = (props) => (
  <TextField
    label="Url"
    fullWidth
    value={props.url_text}
    onChange={props.onUrlChange}
    onKeyUp={props.handleUrlKeyUp}
  />
);

UrlInput.propTypes = {
  url_text: PropTypes.string,
  onUrlChange: PropTypes.func.isRequired,
  handleUrlKeyUp: PropTypes.func.isRequired
};

export default UrlInput;
