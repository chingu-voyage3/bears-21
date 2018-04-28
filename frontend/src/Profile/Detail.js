import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

const Detail = ({data, localUser, onFieldChange}) => (
  <Grid container spacing={16} justify="flex-start" direction="column">
    <Grid item>
      <TextField defaultValue={data.name} label="Name" placeholder="Name" fullWidth />
    </Grid>
    <Grid item>
      <TextField defaultValue={data.email} type="email" label="Email" placeholder="Email" fullWidth />
    </Grid>
  </Grid>
);

Detail.propTypes = {
  localUser: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired
};

export default Detail;
