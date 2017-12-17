import React from 'react';
import Dropzone from 'react-dropzone'; //eslint-disable-line no-unused-vars
import './style.css';

export default (props) => (
  <div className="well">
    <Dropzone onDrop={props.onFileDropped} >
      Drop files here or click to select.
    </Dropzone>
  </div>
);
