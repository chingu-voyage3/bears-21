import React from 'react';
import Dropzone from 'react-dropzone'; //eslint-disable-line no-unused-vars
import './style.css';

export default class Uploader extends React.Component {
  onFileDropped( files) {
    const data = new FormData();
    data.append( 'img', files[0]);
    console.log( "your file was (fake) uploaded"); // eslint-disable-line no-console
    fetch( "/api/upload", {
      method: "post",
      body: data
    })
    .then( ( response) => {
      console.log( "file uploaded:", response); // eslint-disable-line no-console
    })
    .catch( (err) => {
      console.error( "file upload failed:", err); // eslint-disable-line no-console
    })
  }
  render() {
    return (
      <div className="well">
        <Dropzone onDrop={this.onFileDropped} >
          Drop files here or click to select.
        </Dropzone>
      </div>
    );
  }
}
