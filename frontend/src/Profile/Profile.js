import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';
import Avatar from './Avatar';
import Detail from './Detail';
import {getDetail, profileSave} from './actions';

export default class Profile extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };
  state = {
    local_user: false,
    user: null
  };
  componentWillMount = () => {
    const {match} = this.props;
    if (match.params.id) {
      getDetail(match.params.id)
      .then( user => {
        this.setState({user, local_user:false})
      });
    } else {
      this.setState( {user: JSON.parse(localStorage.getItem('user')), local_user: true});
    }
  };
  onFieldChange = e => {
    this.setState( {user: {...this.state.user, [e.target.name]: e.target.value}});
  };
  save = () => {
    profileSave( this.state.user)
    .then( res => {
      if( res.message){
        this.setState( {message: res.message});
      } else {
        this.setState( {message: "Successfully Saved"});
      }
    });
  };
  render = () => {
    const {user, local_user, message} = this.state;
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
          <Avatar name={user.name} image={user.avatar} localUser={local_user} />
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
