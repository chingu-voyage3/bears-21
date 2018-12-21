import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from './Avatar';
import Detail from './Detail';
import ProfileLoader from './Profile.Loader';
import { getDetail, profileSave } from '../User/userActions';
import { ImageRef } from '../Image';
import styled, { css } from 'styled-components';

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
    const { match } = this.props;
    if (match.params.id) {
      this.props.getDetail(match.params.id);
      this.setState({ local_user: false });
    } else {
      const { user } = this.props;
      this.setState({ user, local_user: true });
      this.setAvatarImageSrc(user.avatar);
    }
  };
  componentWillReceiveProps = newProps => {
    if (newProps.user) {
      if (newProps.error) {
        this.setState({ message: newProps.error });
      } else {
        this.setState({
          user: newProps.user,
          message: 'User Saved Successfully'
        });
        this.setAvatarImageSrc(newProps.user.avatar);
      }
    }
  };
  onFieldChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };
  setAvatarImageSrc = image => {
    ImageRef(image, '//via.placeholder.com/200x200?text=No Profile Pic')
      .then(avatar_src => this.setState({ avatar_src }))
      // eslint-disable-next-line no-console
      .catch(e => console.error('ImageRef failed:', e));
  };
  changeImage = avatar => {
    this.setState({ user: { ...this.state.user, avatar } });
    this.setAvatarImageSrc(avatar);
  };
  save = () => {
    this.props.profileSave(this.state.user);
  };
  render = () => {
    const { user, local_user, avatar_src, message = false } = this.state;
    const { isWorking = false } = this.props;
    if (isWorking) {
      return <ProfileLoader />;
    }
    return (
      <Container>
        <Header>Profile</Header>
        <Message message={message}>{message}</Message>
        {local_user ? (
          <SaveWidth type="button" onClick={this.save}>
            Save
          </SaveWidth>
        ) : null}
        <Wrapper>
          <Avatar
            name={user.name}
            image={avatar_src}
            localUser={local_user}
            changeImage={this.changeImage}
          />
          <Detail
            data={user}
            localUser={local_user}
            onFieldChange={this.onFieldChange}
          />
        </Wrapper>
      </Container>
    );
  };
}

const Message = styled.div`
  color: tomato;
  display: none;

  ${props =>
    props.message &&
    css`
      display: block;
    `};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const Header = styled.span`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const Wrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0 0 8px 0;
`;

const SaveWidth = styled.button`
  width: 100px;
`;

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    isWorking: state.userReducer.isWorking,
    error: state.userReducer.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDetail: id => dispatch(getDetail(id)),
    profileSave: user => dispatch(profileSave(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
