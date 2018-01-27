import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';
import Avatar from './Avatar';
import Detail from './Detail';
import {getDetail} from './actions';

export default class Profile extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };
  state = {
    user: null
  };
  componentWillMount = () => {
    const {match} = this.props;
    if (match.params.id) {
      getDetail(match.params.id)
      .then( user => {
        this.setState({user})
      });
    } else {
      this.setState( {user: JSON.parse(localStorage.getItem('user'))});
    }
  };
  render = () => {
    const {user} = this.state;
    if( user === null) {
      return (
        <div className={css(styles.container)}>
          <h1>Profile</h1>
          <p>Loading ...</p>
        </div>
      );
    }
    return (
      <div className={css(styles.container)}>
        <span className={css(styles.h1)}>Profile</span>
        <div className={css(styles.wrapper)}>
          <Avatar name={user.name} image={user.avatar} />
          <Detail data={user} />
        </div>
      </div>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1'
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
  }
});
