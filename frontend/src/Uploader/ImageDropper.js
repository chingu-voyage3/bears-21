import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Dropzone from 'react-dropzone';
import { CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const getDropzoneStyle = (show_image, url) => {
  return {
    padding: show_image? "0":"5px",
    width: '100%',
    height: '250px',
    backgroundPosition: "center",
    backgroundImage: show_image? `url( ${url})`: '',
    backgroundSize: '200px, auto, contain',
    backgroundRepeat: 'no-repeat',
    border: show_image? "none" : "1px dashed grey"
  };
};

const styles = {
  container: {
    padding: 20,
  }
};

const reload_symbol = String.fromCharCode( 8635);
const ImageDropper = (props) => {
  const { classes } = props;
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Dropzone onDrop={props.onFileDropped} style={getDropzoneStyle(props.show_image, props.url)}>
          {props.show_image
              ? ""
              : `Drop files here or click to select.\
                  Alternatively specify url to an online image in the url box\
                  below and click preview button ${reload_symbol}`
          }
        </Dropzone>
      </Grid>
    </Grid>
  );
};

ImageDropper.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string,
  show_image: PropTypes.bool.isRequired,
  onFileDropped: PropTypes.func.isRequired
};

export default withStyles(styles)(ImageDropper);
