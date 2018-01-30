import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';
import Avatar from './Avatar';
import Detail from './Detail';
import {getDetail, profileSave} from './actions';
import loadImage from '../Image/actions';

export default class Profile extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };
  state = {
    message: "",
    // true: me, false: arbitrary user
    local_user: false,
    user: null,
    avatar_src: null
  };
  componentWillMount = () => {
    const {match} = this.props;
    if (match.params.id) {
      getDetail(match.params.id)
      .then( user => {
        this.setState({user, local_user:false});
        this.setAvatarImageSrc( user.avatar);
      });
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      this.setState( { user, local_user: true });
      this.setAvatarImageSrc( user.avatar);
    }
  };
  onFieldChange = e => {
    this.setState( {
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
        message: ""
      }
    });
  };
  setAvatarImageSrc = image => {
    // check for undefined, url, image mongo id, file
    if ( typeof image === 'undefined' || image === null) {
      this.setState( {
        avatar_src: "//via.placeholder.com/200x200?text=No Profile Pic"
      });
    } else if (typeof image === 'string') {
      if( image.indexOf('/') === -1) {
        loadImage( image)
        .then( url => {
          this.setState( {avatar_src: url});
        });
      } else {
        this.setState( {avatar_src: image});
      }
    } else { // typeof user.avatar === 'file'
      this.setState( {avatar_src: URL.createObjectURL( image)});
    }
  }
  changeImage = avatar => {
    this.setState( {user: {...this.state.user, avatar}, message: ""});
    this.setAvatarImageSrc( avatar);
  };
  save = () => {
    profileSave( this.state.user)
    .then( res => {
      if( res.success){
        this.setState( {message: "Successfully Saved"});
      } else {
        this.setState( {message: res.message});
      }
    });
  };
  render = () => {
    const {user, local_user, message, avatar_src} = this.state;
    if( user === null) {
      return (
        <div className={css(styles.container)}>
          <h1>Profile</h1>
          <p>Loading ...</p>
        </div>
      );
    }
    const show_message = {
      color: "tomato",
      display: message?"block":"none"
    };
    return (
      <div className={css(styles.container)}>
        <span className={css(styles.h1)}>Profile</span>
        <div style={show_message} >
          {message}
        </div>
        {local_user
          ? <button type="button"
              className={css(styles.save_width)}
              onClick={this.save} >
              Save
            </button>
          : null
        }
        <div className={css(styles.wrapper)}>
          <Avatar name={user.name}
            image={avatar_src}
            localUser={local_user}
            changeImage={this.changeImage} />
          <Detail data={user} localUser={local_user} onFieldChange={this.onFieldChange} />
        </div>
      </div>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    alignItems: "center"
  },
  h1: {
    marginTop: '1rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  wrapper: {
    margin: '1rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    border: '1px solid lightgrey',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.19) 0 0 8px 0',
  },
  save_width: {
    width: "100px"
  }
});
