import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

import { ImageDefault } from '../Image';
import { Uploader } from '../Uploader';

const Avatar = ({name, localUser, image, changeImage}) => (
  <Grid container justify="center" direction="column">
    <Grid item xs={12}>
      {localUser
        ? <Uploader currentImage={image} addImage={changeImage} />
        : <ImageDefault src={image} missing_url='//via.placeholder.com/200x200?text=noimg' />
      }
    </Grid>
    <Grid item>
      <p>{name}</p>
    </Grid>
  </Grid>
);

Avatar.propTypes = {
  localUser: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  changeImage: PropTypes.func.isRequired
};

export default Avatar;
