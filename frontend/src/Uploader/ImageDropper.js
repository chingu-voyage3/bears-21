import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

const getDropzoneStyle = (show_image, url) => {
  return {
    padding: show_image ? '0' : '5px',
    width: '200px',
    height: '200px',
    backgroundPosition: 'center',
    backgroundImage: show_image ? `url(${url})` : '',
    backgroundSize: '200px, auto, contain',
    backgroundRepeat: 'no-repeat',
    border: show_image ? 'none' : '1px dashed grey'
  };
};
const reload_symbol = String.fromCharCode(8635);
const ImageDropper = props => (
  <Well>
    <Dropzone
      onDrop={props.onFileDropped}
      style={getDropzoneStyle(props.show_image, props.url)}
    >
      {props.show_image
        ? ''
        : `Drop files here or click to select.\
              Alternatively specify url to an online image in the url box\
              below and click preview button ${reload_symbol}`}
    </Dropzone>
  </Well>
);

ImageDropper.propTypes = {
  url: PropTypes.string,
  show_image: PropTypes.bool.isRequired,
  onFileDropped: PropTypes.func.isRequired
};

const Well = styled.div`
  padding: 10px;
  margin-bottom: 0;
`;

export default ImageDropper;
