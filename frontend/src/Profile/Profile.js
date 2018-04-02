import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import Avatar from './Avatar';
import Detail from './Detail';
import ProfileLoader from './Profile.Loader';
import { getDetail, profileSave } from '../Redux/userActions';
import { ImageRef } from '../Image';

class Profile extends React.Component {
  static propTypes = {
    isWorking: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    getDetail: PropTypes.func.isRequired,
    profileSave: PropTypes.func.isRequired
  };

  state = {
    // true: me, false: arbitrary user
    local_user: false,
    user: null,
    avatar_src: null
  };

  componentWillMount = () => {
    const {match} = this.props;
    if (match.params.id) {
      this.props.getDetail(match.params.id);
      this.setState( {local_user: false});
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      this.setState( { user, local_user: true });
      this.setAvatarImageSrc( user.avatar);
    }
  };

  componentWillReceiveProps = newProps => {
    if( newProps.user){
      if( newProps.error) {
        this.setState( {message: newProps.error});
      } else {
        this.setState({user: newProps.user, message: "User Saved Successfully"});
        this.setAvatarImageSrc( newProps.user.avatar);
      }
    }
  };

  onFieldChange = e => {
    this.setState( {
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  setAvatarImageSrc = image => {
    ImageRef(image, "//via.placeholder.com/200x200?text=No Profile Pic")
    .then( avatar_src => this.setState( {avatar_src}));
  }

  changeImage = avatar => {
    this.setState( {user: {...this.state.user, avatar}});
    this.setAvatarImageSrc( avatar);
  };

  save = () => {
    this.props.profileSave( this.state.user);
  };

  render = () => {
    const {user, local_user, avatar_src, message = false} = this.state;
    const {isWorking = false} = this.props;
    if( isWorking) {
      return <ProfileLoader />;
    }
    const show_message = {
      color: "tomato",
      display: message ? "block": "none"
    };
    return (
      <div style={{ padding: 40 }}>
        <Grid container spacing={16} justify="center">
          <Grid item xs={4}>
            <Avatar name={user.name}
              image={avatar_src}
              localUser={local_user}
              changeImage={this.changeImage} />
          </Grid>
          <Grid item xs={6}>
            <Detail data={user} localUser={local_user} onFieldChange={this.onFieldChange} />
          </Grid>
          <Grid container spacing={16} justify="center">
            <Grid item>
              <Button variant="raised" color="primary">
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    isWorking: state.user.isWorking,
    error: state.user.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDetail: id => dispatch(getDetail(id)),
    profileSave: user => dispatch(profileSave(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
